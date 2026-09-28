import ActionModal from '../components/ActionModal';
import GlobalSeatInspectorModal from '../components/GlobalSeatInspectorModal';
import { useState } from 'react';
import { User, Map, Clock, CheckCircle2, Navigation, Bus, ChevronRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const schedules = [
  { type: 'LUXURY EXPRESS', id: 'NC-1234', name: 'Rajarata Express', routeDetails: 'Anuradhapura Central → Polonnaruwa Town', departure: '06:00 AM', origin: 'Anuradhapura', arrival: '08:30 AM', destination: 'Polonnaruwa', distance: '105 KM', duration: '2h 30m', corridor: 'A11 Highway', features: ['A/C', 'Reclining Seats', 'USB Charging', 'Live GPS'], spotFare: '150.00', seasonFare: '4,500/mo' },
  { type: 'NORMAL', id: 'NC-9012', name: 'Mihintale Direct', routeDetails: 'Anuradhapura Stand → Mihintale Town', departure: '05:30 AM', origin: 'Anuradhapura', arrival: '06:15 AM', destination: 'Mihintale', distance: '15 KM', duration: '45m', corridor: 'A12 Highway', features: ['Standard', 'Live GPS'], spotFare: '50.00', seasonFare: '1,500/mo' },
  { type: 'NIGHT RIDER', id: 'NC-3456', name: 'Habarana Night', routeDetails: 'Polonnaruwa Central → Habarana Junction', departure: '08:00 PM', origin: 'Polonnaruwa', arrival: '09:30 PM', destination: 'Habarana', distance: '45 KM', duration: '1h 30m', corridor: 'A11 Highway', features: ['Night Route', 'Live GPS', 'Luggage Space'], spotFare: '120.00', seasonFare: '3,000/mo' },
  { type: 'SEMI-LUXURY', id: 'NC-7880', name: 'Kekirawa Shuttle', routeDetails: 'Anuradhapura Stand → Kekirawa Central', departure: '07:30 AM', origin: 'Anuradhapura', arrival: '08:45 AM', destination: 'Kekirawa', distance: '40 KM', duration: '1h 15m', corridor: 'A9 Highway', features: ['A/C', 'Live GPS'], spotFare: '100.00', seasonFare: '3,000/mo' },
  { type: 'LUXURY EXPRESS', id: 'NC-1122', name: 'Medawachchiya Direct', routeDetails: 'Anuradhapura Central → Medawachchiya Stand', departure: '08:15 AM', origin: 'Anuradhapura', arrival: '09:00 AM', destination: 'Medawachchiya', distance: '28 KM', duration: '45m', corridor: 'A9 Highway', features: ['A/C', 'Live GPS'], spotFare: '80.00', seasonFare: '2,400/mo' },
  { type: 'NORMAL EXPRESS', id: 'NC-5566', name: 'Thambuttegama Cruiser', routeDetails: 'Anuradhapura Stand → Thambuttegama Town', departure: '04:00 PM', origin: 'Anuradhapura', arrival: '04:50 PM', destination: 'Thambuttegama', distance: '25 KM', duration: '50m', corridor: 'A28 Highway', features: ['Standard', 'Live GPS'], spotFare: '70.00', seasonFare: '2,000/mo' },
  { type: 'SEMI-LUXURY', id: 'NC-3344', name: 'Eppawala AC', routeDetails: 'Anuradhapura Central → Eppawala Town', departure: '09:00 AM', origin: 'Anuradhapura', arrival: '09:45 AM', destination: 'Eppawala', distance: '22 KM', duration: '45m', corridor: 'A28 Highway', features: ['A/C', 'Live GPS'], spotFare: '90.00', seasonFare: '2,500/mo' },
  { type: 'NORMAL', id: 'NC-8877', name: 'Hingurakgoda Intercity', routeDetails: 'Polonnaruwa Central → Hingurakgoda Stand', departure: '11:30 AM', origin: 'Polonnaruwa', arrival: '12:15 PM', destination: 'Hingurakgoda', distance: '18 KM', duration: '45m', corridor: 'A11 Highway', features: ['Standard Seats', 'Live GPS'], spotFare: '60.00', seasonFare: '1,800/mo' },
  { type: 'LUXURY EXPRESS', id: 'NC-2233', name: 'Minneriya Express', routeDetails: 'Polonnaruwa Stand → Minneriya Town', departure: '05:00 AM', origin: 'Polonnaruwa', arrival: '05:40 AM', destination: 'Minneriya', distance: '20 KM', duration: '40m', corridor: 'A11 Highway', features: ['A/C', 'Reclining Seats'], spotFare: '80.00', seasonFare: '2,400/mo' },
  { type: 'NORMAL', id: 'NC-9900', name: 'Padaviya Runner', routeDetails: 'Anuradhapura Stand → Padaviya Central', departure: '08:00 PM', origin: 'Anuradhapura', arrival: '10:00 PM', destination: 'Padaviya', distance: '85 KM', duration: '2h 00m', corridor: 'B334 Highway', features: ['Night Route'], spotFare: '140.00', seasonFare: '4,000/mo' },
  { type: 'SEMI-LUXURY', id: 'NC-4455', name: 'Galenbindunuwewa Shuttle', routeDetails: 'Anuradhapura Central → Galenbindunuwewa', departure: '02:00 PM', origin: 'Anuradhapura', arrival: '03:15 PM', destination: 'Galenbindunuwewa', distance: '45 KM', duration: '1h 15m', corridor: 'A12 Highway', features: ['A/C', 'Live GPS'], spotFare: '110.00', seasonFare: '3,200/mo' },
  { type: 'NORMAL', id: 'NC-6677', name: 'Nochchiyagama Coastal', routeDetails: 'Anuradhapura Stand → Nochchiyagama Town', departure: '10:15 AM', origin: 'Anuradhapura', arrival: '11:15 AM', destination: 'Nochchiyagama', distance: '35 KM', duration: '1h 00m', corridor: 'A12 Highway', features: ['Standard Seats'], spotFare: '80.00', seasonFare: '2,400/mo' },
  { type: 'SEMI-LUXURY', id: 'NC-1199', name: 'Horowpothana Climber', routeDetails: 'Anuradhapura Central → Horowpothana', departure: '06:30 AM', origin: 'Anuradhapura', arrival: '08:00 AM', destination: 'Horowpothana', distance: '50 KM', duration: '1h 30m', corridor: 'A12 Highway', features: ['A/C'], spotFare: '130.00', seasonFare: '3,800/mo' },
  { type: 'NORMAL', id: 'NC-2288', name: 'Kahatagasdigiliya Night', routeDetails: 'Anuradhapura Stand → Kahatagasdigiliya', departure: '09:30 PM', origin: 'Anuradhapura', arrival: '10:30 PM', destination: 'Kahatagasdigiliya', distance: '38 KM', duration: '1h 00m', corridor: 'A12 Highway', features: ['Night Route'], spotFare: '90.00', seasonFare: '2,600/mo' },
  { type: 'SEMI-LUXURY', id: 'NC-7733', name: 'Medawachchiya Direct', routeDetails: 'Anuradhapura Central → Medawachchiya', departure: '03:45 PM', origin: 'Anuradhapura', arrival: '04:30 PM', destination: 'Medawachchiya', distance: '28 KM', duration: '45m', corridor: 'A9 Highway', features: ['A/C', 'Live GPS'], spotFare: '80.00', seasonFare: '2,400/mo' },
  { type: 'NORMAL', id: 'NC-5511', name: 'Kekirawa Intercity', routeDetails: 'Anuradhapura Stand → Kekirawa Town', departure: '01:00 PM', origin: 'Anuradhapura', arrival: '02:15 PM', destination: 'Kekirawa', distance: '40 KM', duration: '1h 15m', corridor: 'A9 Highway', features: ['Standard Seats'], spotFare: '90.00', seasonFare: '2,600/mo' },
  { type: 'LUXURY EXPRESS', id: 'NC-8844', name: 'Polonnaruwa Express', routeDetails: 'Anuradhapura Central → Polonnaruwa', departure: '07:00 AM', origin: 'Anuradhapura', arrival: '09:30 AM', destination: 'Polonnaruwa', distance: '105 KM', duration: '2h 30m', corridor: 'A11 Highway', features: ['A/C', 'Reclining Seats'], spotFare: '150.00', seasonFare: '4,500/mo' },
  { type: 'NORMAL', id: 'NC-3399', name: 'Thambuttegama Runner', routeDetails: 'Anuradhapura Stand → Thambuttegama', departure: '06:00 PM', origin: 'Anuradhapura', arrival: '06:50 PM', destination: 'Thambuttegama', distance: '25 KM', duration: '50m', corridor: 'A28 Highway', features: ['Night Route'], spotFare: '70.00', seasonFare: '2,000/mo' },
  { type: 'SEMI-LUXURY', id: 'NC-2266', name: 'Mihintale Shuttle', routeDetails: 'Anuradhapura Central → Mihintale', departure: '12:30 PM', origin: 'Anuradhapura', arrival: '01:15 PM', destination: 'Mihintale', distance: '15 KM', duration: '45m', corridor: 'A12 Highway', features: ['A/C', 'Live GPS'], spotFare: '60.00', seasonFare: '1,800/mo' },
  { type: 'LUXURY EXPRESS', id: 'NC-9988', name: 'Habarana Coastal', routeDetails: 'Polonnaruwa Central → Habarana Town', departure: '11:00 AM', origin: 'Polonnaruwa', arrival: '12:30 PM', destination: 'Habarana', distance: '45 KM', duration: '1h 30m', corridor: 'A11 Highway', features: ['A/C', 'Reclining Seats'], spotFare: '140.00', seasonFare: '4,000/mo' }
];

export default function ScheduleExplorer() {
  const [inspectorOpen, setInspectorOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', msg: '' });
  const handleAction = (title: string, msg: string) => {
    setModalContent({ title, msg });
    setModalOpen(true);
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#06080f] text-gray-800 dark:text-gray-200 font-sans pb-12">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 py-4 gap-4 sm:gap-0 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0c14]">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <img src="/logo.png" alt="TapRide Logo" className="w-8 h-8 rounded-lg shadow-sm" />
          <div>
            <h1 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              TapRide <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded border border-blue-200 dark:border-blue-800/50">LIVE SCHEDULES</span>
            </h1>
            <p className="text-[9px] text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-0.5">INTERSTATE TIMETABLES & STOPOVER DIRECTORY</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/passenger')} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white text-xs px-4 py-2 rounded-md font-medium transition-colors bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">Book Seats</button>
          <button onClick={() => navigate('/passenger')} className="text-yellow-600 dark:text-yellow-500 hover:text-yellow-400 text-xs px-4 py-2 rounded-md font-medium transition-colors bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-700/30 flex items-center gap-2">
            <Clock className="w-4 h-4" /> Seat Inspector
          </button>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto mt-8 space-y-6">
        
        {/* Search Filter Header */}
        <div className="bg-white dark:bg-[#121622] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4 md:gap-0">
            <div>
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded inline-block">NETWORK TIMETABLE & FREQUENCY</span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Bus Schedule Explorer</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Find operational departure slots, intermediate stopover arrival times, and seat pool balances.</p>
            </div>
            <div className="bg-white dark:bg-[#0a0c14] border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-3 flex items-center gap-3">
              <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-500" />
              <div>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase">Network Time</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">03:57:00 PM</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Origin City</label>
              <select className="w-full bg-white dark:bg-[#0a0c14] border border-gray-300 dark:border-gray-700 text-sm text-gray-900 dark:text-white rounded-lg px-4 py-3 outline-none truncate">
                <option>All Origins (Anuradhapura / Polonnaruwa)</option>
                <option>Anuradhapura</option>
                <option>Polonnaruwa</option>
                <option>Habarana</option>
                <option>Mihintale</option>
                <option>Kekirawa</option>
                <option>Medawachchiya</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Destination City</label>
              <select className="w-full bg-white dark:bg-[#0a0c14] border border-gray-300 dark:border-gray-700 text-sm text-gray-900 dark:text-white rounded-lg px-4 py-3 outline-none truncate">
                <option>All Destinations</option>
                <option>Anuradhapura</option>
                <option>Polonnaruwa</option>
                <option>Habarana</option>
                <option>Mihintale</option>
                <option>Kekirawa</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Travel Date</label>
              <input type="date" defaultValue="2026-08-13" className="w-full bg-white dark:bg-[#0a0c14] border border-gray-300 dark:border-gray-700 text-sm text-gray-900 dark:text-white rounded-lg px-4 py-3 outline-none truncate pr-10" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Bus Fleet Service Class</label>
              <select className="w-full bg-white dark:bg-[#0a0c14] border border-gray-300 dark:border-gray-700 text-sm text-gray-900 dark:text-white rounded-lg px-4 py-3 outline-none truncate">
                <option>All Service Classes</option>
                <option>Luxury Express (A/C)</option>
                <option>Semi-Luxury</option>
                <option>Normal Express</option>
                <option>Night Rider</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-[#121622] rounded-xl p-4 border border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <div>
              <p className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Scheduled Daily Runs</p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">12 Daily Runs</h3>
            </div>
            <Bus className="w-5 h-5 text-blue-600 dark:text-blue-500" />
          </div>
          <div className="bg-white dark:bg-[#121622] rounded-xl p-4 border border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <div>
              <p className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Average Schedule Punctuality</p>
              <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400">98.4% On-Time</h3>
            </div>
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
          </div>
          <div className="bg-white dark:bg-[#121622] rounded-xl p-4 border border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <div>
              <p className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Season Pass Seat Reserve</p>
              <h3 className="text-lg font-bold text-yellow-600 dark:text-yellow-500">60% Pool Protected</h3>
            </div>
            <div className="px-2 py-1 bg-yellow-900/30 border border-yellow-700/50 rounded text-yellow-600 dark:text-yellow-500 text-xs"></div>
          </div>
          <div className="bg-white dark:bg-[#121622] rounded-xl p-4 border border-gray-200 dark:border-gray-800 flex justify-between items-center border-l-2 border-l-blue-500">
            <div>
              <p className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Open Spot Availability</p>
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">58 Seats Open</h3>
            </div>
            <User className="w-5 h-5 text-blue-600 dark:text-blue-500" />
          </div>
        </div>

        {/* Schedule List */}
        <div className="space-y-4">
          {schedules.map((schedule, idx) => (
            <div key={idx} className="bg-white dark:bg-[#121622] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg hover:border-gray-300 dark:border-gray-700 transition-colors">
              <div className="p-6">
                
                {/* Header of Card */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4 md:gap-0">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase bg-blue-900/20 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800/30 tracking-widest">{schedule.type}</span>
                      <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">{schedule.id}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{schedule.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{schedule.routeDetails}</p>
                  </div>
                  <div className="flex gap-2 w-full md:w-auto">
                    <button onClick={() => navigate('/passenger')} className="flex-1 md:flex-none text-center text-xs bg-gray-100 dark:bg-gray-900 hover:bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 transition-colors">Inspect Stopovers</button>
                    <button onClick={() => navigate('/passenger')} className="flex-1 md:flex-none text-center text-xs bg-blue-600 hover:bg-blue-500 text-white px-4 md:px-6 py-2 rounded-lg font-bold shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all">Book Spot Seat</button>
                  </div>
                </div>

                {/* Timeline UI */}
                <div className="flex items-center justify-between mb-8 px-1 sm:px-4">
                  <div className="text-left w-32">
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mb-1">Departure</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">{schedule.departure}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{schedule.origin}</p>
                  </div>

                  <div className="flex-1 px-1 sm:px-8 relative flex flex-col items-center">
                    <div className="w-full flex justify-between text-[10px] text-gray-500 dark:text-gray-400 font-mono mb-2">
                      <span>{schedule.distance}</span>
                      <span>{schedule.duration}</span>
                    </div>
                    <div className="w-full flex items-center">
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                      <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800 relative">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#121622] px-2 flex flex-col items-center">
                          <Bus className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mb-1" />
                          <span className="text-[9px] text-emerald-600 dark:text-emerald-500 font-bold tracking-widest">{schedule.corridor}</span>
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                  </div>

                  <div className="text-right w-32">
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mb-1">Estimated Arrival</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">{schedule.arrival}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{schedule.destination}</p>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-4 border-t border-gray-200 dark:border-gray-800/50 gap-4 lg:gap-0">
                  <div className="flex flex-wrap gap-2">
                    {schedule.features.map(f => (
                      <span key={f} className="text-[10px] bg-white dark:bg-[#0a0c14] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-500" /> {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between w-full lg:w-auto gap-6">
                    <div className="text-right">
                      <p className="text-[9px] text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">Spot Fare:</p>
                      <p className="text-sm font-bold text-red-600 dark:text-red-400">Rs. {schedule.spotFare}</p>
                    </div>
                    <div className="w-px h-8 bg-gray-100 dark:bg-gray-800"></div>
                    <div className="text-right">
                      <p className="text-[9px] text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">Season Pass:</p>
                      <p className="text-sm font-bold text-yellow-600 dark:text-yellow-500">Rs. {schedule.seasonFare}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </main>
      <GlobalSeatInspectorModal isOpen={inspectorOpen} onClose={() => setInspectorOpen(false)} />
          <ActionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalContent.title} message={modalContent.msg} />
</div>
  );
}
