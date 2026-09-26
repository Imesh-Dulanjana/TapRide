import SeasonPassModal from '../components/SeasonPassModal';
import WalletModal from '../components/WalletModal';
import ActionModal from '../components/ActionModal';
import React, { useState } from 'react';
import { Bus, Clock, Calendar, Check, Lock, ChevronLeft, User, Ticket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

// Simulated seat layout matching the screenshot
const generateSeats = () => {
  const seats = [];
  for (let i = 1; i <= 50; i++) {
    const id = `A${i.toString().padStart(2, '0')}`;
    let status: 'open' | 'reserved' | 'booked' = 'open';
    
    // Simulate some booked/reserved seats from the screenshot pattern
    if (i <= 30) {
      status = 'reserved'; // Season passes
    } else if ([35, 36, 42, 45, 49].includes(i)) {
      status = 'booked';
    }
    
    seats.push({ id, status });
  }
  return seats;
};

export default function PassengerPortal() {
    const [seasonOpen, setSeasonOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', msg: '' });
  const handleAction = (title: string, msg: string) => {
    setModalContent({ title, msg });
    setModalOpen(true);
  };

  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const seats = generateSeats();
  const baseFare = 150;

  const handleSeatClick = (seatId: string, status: string) => {
    if (status === 'open') {
      setSelectedSeats(prev => 
        prev.includes(seatId) 
          ? prev.filter(id => id !== seatId)
          : [...prev, seatId]
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#06080f] text-gray-800 dark:text-gray-200 font-sans flex flex-col">
      {/* Top Header */}
      <header className="px-4 sm:px-6 py-3 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0c14]">
        {/* Top row: Logo + User */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-blue-600 p-1.5 rounded-lg shrink-0">
              <Bus className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                TapRide <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded border border-blue-200 dark:border-blue-800/50">PASSENGER PORTAL</span>
              </h1>
              <p className="hidden sm:block text-[9px] text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-0.5">Unified Passenger Console</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Your Username</p>
              <p className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center justify-end gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active Pass Holder
              </p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center shrink-0">
              <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </div>
          </div>
        </div>
        {/* Nav tabs - scrollable on mobile */}
        <nav className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
          <button className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-md font-medium whitespace-nowrap shrink-0">Spot Trip Booking</button>
          <button onClick={() => setSeasonOpen(true)} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs px-3 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap shrink-0">Monthly Season Pass</button>
          <button onClick={() => setWalletOpen(true)} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> My Pass Wallet
          </button>
          <button onClick={() => navigate('/schedules')} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs px-3 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap shrink-0">Fleet Seat Map</button>
        </nav>
      </header>

      <main className="flex-1 p-4 sm:p-8 max-w-7xl mx-auto w-full">
        {/* Page Title Area */}
        <div className="bg-white dark:bg-[#121622] rounded-2xl p-5 sm:p-6 border border-gray-200 dark:border-gray-800 mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 shadow-lg">
          <div>
            <div className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-2 bg-red-400/10 inline-block px-2 py-1 rounded">Instant Spot Trip</div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">Book Occasional Seats</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Select your travel route, date, and visual seat locations from open spot inventory.</p>
          </div>
          <div className="bg-white dark:bg-[#0a0c14] border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-3 flex items-center gap-3 self-start sm:self-auto">
            <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-500 shrink-0" />
            <div>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase">Current Server Date</p>
              <p className="text-sm font-mono text-gray-900 dark:text-white">2026-08-12</p>
            </div>
          </div>
        </div>

        {/* Selection Controls */}
        <div className="bg-white dark:bg-[#121622] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-6 shadow-lg">
          <div>
            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Select Operational Route</label>
            <select className="w-full bg-white dark:bg-[#0a0c14] border border-gray-300 dark:border-gray-700 text-sm text-gray-900 dark:text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 appearance-none truncate text-ellipsis overflow-hidden">
              <option>Anuradhapura → Polonnaruwa (Rajarata Express - NC-1234)</option>
              <option>Anuradhapura → Mihintale (Mihintale Direct - NC-9012)</option>
              <option>Polonnaruwa → Habarana (Habarana Night - NC-3456)</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Travel Date</label>
            <div className="relative">
              <input type="date" defaultValue="2026-08-13" className="w-full bg-white dark:bg-[#0a0c14] border border-gray-300 dark:border-gray-700 text-sm text-gray-900 dark:text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 appearance-none" />
              <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400 absolute right-4 top-3.5 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Base Ticket Fare</label>
            <div className="w-full bg-white dark:bg-[#0a0c14] border border-gray-300 dark:border-gray-700 text-sm text-gray-900 dark:text-white rounded-lg px-4 py-3 flex justify-between items-center">
              <span>Spot Ticket Price</span>
              <span className="text-red-600 dark:text-red-400 font-bold">Rs. {baseFare.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Interactive Layout & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Seat Map */}
          <div className="col-span-1 lg:col-span-2 bg-white dark:bg-[#121622] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 bg-white dark:bg-[#0a0c14]/50">
              <div className="flex items-center gap-2">
                <Bus className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Interactive Bus Floor Layout</h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 hidden sm:inline">Click available green seats to select multiple spots.</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                  <span className="w-3 h-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"></span> Available
                </div>
                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                  <span className="w-3 h-3 rounded bg-emerald-500 border border-emerald-600"></span> Selected
                </div>
                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                  <span className="w-3 h-3 rounded bg-yellow-500/20 border border-yellow-500/50"></span> Pending
                </div>
                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                  <span className="w-3 h-3 rounded bg-red-500/20 border border-red-500/50"></span> Sold Out
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-8 overflow-x-auto">
              <div className="min-w-[320px]">
              {/* Bus Front UI */}
              <div className="flex flex-row justify-between items-center w-full bg-white dark:bg-[#0a0c14] border border-gray-200 dark:border-gray-800 rounded-xl p-4 mb-8">
                <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 uppercase bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded border border-emerald-200 dark:border-emerald-500/20 tracking-widest">← Entrance Door</div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Driver Cabin</span>
                  <div className="w-8 h-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-300 dark:border-gray-700">
                    <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Grid of Seats */}
              <div className="pb-2">
              <div className="grid grid-cols-6 gap-y-3 gap-x-1 min-w-[320px]">
                {seats.map((seat, index) => {
                  const isOpen = seat.status === 'open';
                  const isReserved = seat.status === 'reserved';
                  const isBooked = seat.status === 'booked';
                  const isSelected = selectedSeats.includes(seat.id);

                  return (
                    <React.Fragment key={seat.id}>
                      {index % 5 === 2 && <div className="w-2 sm:w-12"></div>}
                      <button
                      disabled={!isOpen}
                      onClick={() => handleSeatClick(seat.id, seat.status)}
                      className={clsx(
                        "flex flex-col items-center justify-center p-1 sm:p-3 rounded-xl border transition-all h-12 w-12 sm:h-16 sm:w-20 mx-auto",
                        isOpen && !isSelected && "bg-white dark:bg-[#0a0c14] border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer",
                        isSelected && "bg-emerald-500 border-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] transform scale-105",
                        isReserved && "bg-yellow-500/10 border-yellow-500/30 text-yellow-600 dark:text-yellow-500 cursor-not-allowed opacity-80",
                        isBooked && "bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400 cursor-not-allowed opacity-80",
                      )}
                    >
                      <span className="text-[10px] sm:text-sm font-bold">{seat.id}</span>
                      <span className="hidden sm:block text-[9px] uppercase tracking-wider mt-1 opacity-80">
                        {isSelected ? 'SELECTED' : seat.status === 'open' ? 'OPEN' : seat.status === 'reserved' ? 'PASS' : 'TAKEN'}
                      </span>
                    </button>
                    </React.Fragment>
                  );
                })}
              </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0c14]/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
              <p className="text-xs text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border border-blue-400 flex items-center justify-center text-[10px]">i</span>
                Seats A01–A30 are reserved for 30-day Season Pass Passengers.
              </p>
              <div className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded border border-gray-200 dark:border-gray-800">60% / 40% Pool</div>
            </div>
          </div>

          {/* Checkout Panel */}
          <div className="bg-white dark:bg-[#121622] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg p-6 sticky top-6">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Ticket className="w-4 h-4 text-yellow-600 dark:text-yellow-500" />
              Spot Trip Summary
            </h3>
            
            <div className="space-y-4 text-sm mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Selected Bus:</span>
                <span className="text-gray-900 dark:text-white font-medium">Rajarata Express</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Travel Date:</span>
                <span className="text-gray-900 dark:text-white font-medium">2026-08-13</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Departure Time:</span>
                <span className="text-gray-900 dark:text-white font-medium">06:00 AM</span>
              </div>
              <div className="flex justify-between items-start pt-2">
                <span className="text-gray-500 dark:text-gray-400 mt-1">Seat Numbers:</span>
                <div className="flex flex-wrap gap-1 justify-end max-w-[60%]">
                  {selectedSeats.length > 0 ? (
                    selectedSeats.map(seatId => (
                      <span key={seatId} className="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">{seatId}</span>
                    ))
                  ) : (
                    <span className="text-gray-600 font-medium bg-gray-100 dark:bg-gray-900 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-800">None Selected</span>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Payable Fare:</span>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Rs. {(selectedSeats.length * baseFare).toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {selectedSeats.length > 1 ? `Calculated for ${selectedSeats.length} seats. Includes digital QR passes for all passengers.` : 'Includes digital QR pass generation & instant boarding verification payload.'}
              </p>
            </div>

            <button   
              disabled={selectedSeats.length === 0}
              className={clsx(
                "w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all",
                selectedSeats.length > 0 
                  ? "bg-blue-600 hover:bg-blue-500 text-gray-900 dark:text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]" 
                  : "bg-gray-100 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 cursor-not-allowed border border-gray-200 dark:border-gray-800"
              )}
            >
              {selectedSeats.length > 0 ? <Check className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
              Confirm & Issue {selectedSeats.length > 1 ? `${selectedSeats.length} Spot Passes` : 'Spot QR Pass'}
            </button>
          </div>
        </div>
      </main>
          
      <SeasonPassModal isOpen={seasonOpen} onClose={() => setSeasonOpen(false)} />
      <WalletModal isOpen={walletOpen} onClose={() => setWalletOpen(false)} />
      <ActionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalContent.title} message={modalContent.msg} />
</div>
  );
}
