import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Settings, QrCode, Plus, LayoutGrid, ScanLine, History, User, 
  ChevronLeft, Flashlight, Keyboard, Info, CheckCircle2, Navigation, Clock 
} from 'lucide-react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import ActionModal from '../components/ActionModal';

export default function ConductorDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{title: string, message: string}>({
    title: '', message: ''
  });

  const handleAction = (title: string, message: string) => {
    setModalContent({ title, message });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#06080f] pb-24 font-sans text-gray-900 dark:text-gray-100 max-w-5xl mx-auto relative shadow-2xl border-x border-gray-200 dark:border-gray-800">
      {activeTab === 'dashboard' && <DashboardView setActiveTab={setActiveTab} handleAction={handleAction} />}
      {activeTab === 'scanner' && <ScannerView setActiveTab={setActiveTab} handleAction={handleAction} />}
      {activeTab === 'history' && <PlaceholderView title="History" />}
      {activeTab === 'profile' && <PlaceholderView title="Profile" />}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-5xl mx-auto bg-white dark:bg-[#131620] border-t border-x border-gray-200 dark:border-gray-800 flex justify-around items-center py-2 px-2 z-50 pb-safe">
        <NavItem icon={LayoutGrid} label="Dashboard" isActive={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
        <NavItem icon={ScanLine} label="Scanner" isActive={activeTab === 'scanner'} onClick={() => setActiveTab('scanner')} />
        <NavItem icon={History} label="History" isActive={activeTab === 'history'} onClick={() => setActiveTab('history')} />
        <NavItem icon={User} label="Profile" isActive={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
      </div>

      <ActionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        message={modalContent.message}
      />
    </div>
  );
}

function DashboardView({ setActiveTab, handleAction }: any) {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4 bg-white dark:bg-[#131620]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full text-white font-bold flex items-center justify-center text-sm">AK</div>
          <div>
            <h2 className="font-bold text-sm text-gray-900 dark:text-white">Kasun Perera</h2>
            <p className="text-[10px] text-gray-500 uppercase tracking-wide">Conductor · TapRide</p>
          </div>
        </div>
        <button onClick={() => handleAction('Settings', 'Conductor settings and preferences.')} className="relative p-2.5 bg-gray-100 dark:bg-gray-800/50 rounded-full">
          <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#131620]"></span>
        </button>
      </div>

      {/* Status */}
      <div className="mx-5 mt-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30 rounded-xl px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-500">System Online</span>
        </div>
        <span className="text-[10px] text-gray-500 font-medium">Last sync · 11:20 AM</span>
      </div>

      {/* Welcome */}
      <div className="px-5 mt-6 mb-5">
        <p className="text-xs text-gray-500 font-medium mb-1">Good morning</p>
        <h1 className="text-[26px] font-black text-gray-900 dark:text-white leading-tight">Conductor Dashboard</h1>
      </div>

      {/* Bus Card */}
      <div className="mx-5 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg shadow-blue-900/20">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div>
            <p className="text-[10px] text-blue-200 uppercase tracking-wider font-bold mb-1">Assigned Bus</p>
            <h2 className="text-3xl font-black">NB-4521</h2>
          </div>
          <span className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wide border border-white/10">ACTIVE SHIFT</span>
        </div>

        <div className="mb-6 relative z-10">
          <h3 className="font-bold text-sm mb-0.5">Route 41 · Anuradhapura – Polonnaruwa</h3>
          <p className="text-xs text-blue-200">Direction · Polonnaruwa</p>
        </div>

        <div className="grid grid-cols-3 gap-2 relative z-10">
          <div className="bg-black/20 rounded-xl p-3 backdrop-blur-sm border border-white/5">
            <p className="text-[9px] text-blue-200 uppercase tracking-wider mb-1">Shift</p>
            <p className="text-xs font-bold">06:00 – 14:00</p>
          </div>
          <div className="bg-black/20 rounded-xl p-3 backdrop-blur-sm border border-white/5">
            <p className="text-[9px] text-blue-200 uppercase tracking-wider mb-1">Driver</p>
            <p className="text-xs font-bold">S. Fernando</p>
          </div>
          <div className="bg-black/20 rounded-xl p-3 backdrop-blur-sm border border-white/5">
            <p className="text-[9px] text-blue-200 uppercase tracking-wider mb-1">Status</p>
            <p className="text-xs font-bold">On Route</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mx-5 mt-5 flex gap-3">
        <button onClick={() => setActiveTab('scanner')} className="flex-1 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-2 shadow-md shadow-blue-600/20">
          <QrCode className="w-5 h-5" /> Scan Passenger QR
        </button>
        <button onClick={() => handleAction('Issue Cash Ticket', 'Open interface to manually issue and print a cash ticket.')} className="flex-[0.7] bg-white dark:bg-[#131620] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200 rounded-2xl py-4 font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 active:scale-[0.98] transition-all">
          <Plus className="w-5 h-5" /> Cash Ticket
        </button>
      </div>

      {/* Summary Section */}
      <div className="px-5 mt-8">
        <div className="flex justify-between items-end mb-4">
          <h3 className="font-bold text-gray-900 dark:text-white">Today's Summary</h3>
          <span className="text-[10px] text-gray-500 font-medium">29 Aug 2026</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SummaryCard icon={QrCode} color="blue" label="Digital Fares" value="Rs. 8,450" />
          <SummaryCard icon={Clock} color="emerald" label="Cash Tickets" value="Rs. 3,280" />
          <SummaryCard icon={User} color="gray" label="Passengers" value="186" />
          <SummaryCard icon={History} color="purple" label="Pending Sync" value="8" />
        </div>
      </div>

      {/* Sync Queue */}
      <div className="mx-5 mt-4 bg-white dark:bg-[#131620] border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/10 rounded-full flex items-center justify-center text-purple-600 shrink-0">
            <History className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">Offline Sync Queue</h4>
            <p className="text-[10px] text-gray-500">Transactions waiting for synchronisation</p>
            <div className="flex items-center gap-2 mt-2">
               <div className="h-1.5 w-24 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                 <div className="h-full bg-purple-500 w-[30%]"></div>
               </div>
               <span className="text-[9px] text-gray-400">8 pending events</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-xl font-black text-purple-600">8</span>
          <button onClick={() => handleAction('Sync Now', 'Force manual synchronization of offline records.')} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-[10px] font-bold rounded-lg hover:bg-blue-100 transition-colors">Sync Now</button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-5 mt-8 mb-4">
        <div className="flex justify-between items-end mb-4">
          <h3 className="font-bold text-gray-900 dark:text-white">Recent Activity</h3>
          <button onClick={() => handleAction('View All Activity', 'Show comprehensive transaction logs.')} className="text-[10px] text-gray-500 font-medium hover:text-blue-600">View all</button>
        </div>
        <div className="space-y-3">
          <ActivityItem type="digital" title="Digital Fare" subtitle="Passenger QR validated · Route 41" time="11:18 AM" amount="Rs. 52" status="COMPLETED" />
          <ActivityItem type="cash" title="Cash Ticket" subtitle="Manual fallback ticket · Stage 4" time="11:05 AM" amount="Rs. 45" status="RECORDED" />
          <ActivityItem type="digital" title="Digital Fare" subtitle="Season Pass scanned · Route 41" time="10:42 AM" amount="Rs. 0" status="COMPLETED" />
          <ActivityItem type="digital" title="Digital Fare" subtitle="Passenger QR validated · Route 41" time="10:38 AM" amount="Rs. 120" status="COMPLETED" />
          <ActivityItem type="cash" title="Cash Ticket" subtitle="Manual fallback ticket · Stage 2" time="10:15 AM" amount="Rs. 25" status="RECORDED" />
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ icon: Icon, color, label, value }: any) {
  const colorMap: any = {
    blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20',
    emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20',
    gray: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
    purple: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20'
  };

  return (
    <div className="bg-white dark:bg-[#131620] border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center text-center">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 ${colorMap[color]}`}>
        <Icon className="w-4 h-4" />
      </div>
      <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-1">{label}</p>
      <p className="text-lg font-black text-gray-900 dark:text-white">{value}</p>
    </div>
  );
}

function ActivityItem({ type, title, subtitle, time, amount, status }: any) {
  const isDigital = type === 'digital';
  return (
    <div className="bg-white dark:bg-[#131620] border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isDigital ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600'}`}>
          {isDigital ? <QrCode className="w-5 h-5" /> : <span className="font-bold text-sm">Rs</span>}
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">{title}</h4>
          <p className="text-[10px] text-gray-500">{subtitle}</p>
          <p className="text-[9px] text-gray-400 mt-1">{time}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <span className="font-bold text-emerald-600">{amount}</span>
        <span className="text-[8px] font-bold px-2 py-1 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 rounded-md uppercase tracking-wider border border-emerald-100 dark:border-emerald-900/30">{status}</span>
      </div>
    </div>
  );
}

function ScannerView({ setActiveTab, handleAction }: any) {
  const [scanResult, setScanResult] = useState<string | null>(null);

  useEffect(() => {
    if (!scanResult) {
      const scanner = new Html5QrcodeScanner('reader', { 
        qrbox: { width: 250, height: 250 }, 
        fps: 10,
        aspectRatio: 1.0 
      }, false);
      
      scanner.render(
        (decodedText) => {
          scanner.clear();
          setScanResult(decodedText);
        },
        (error) => {}
      );
      
      return () => {
        scanner.clear().catch(e => console.error("Failed to clear scanner", e));
      };
    }
  }, [scanResult]);

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300 min-h-screen bg-gray-50 dark:bg-[#06080f]">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-4 bg-white dark:bg-[#131620] sticky top-0 z-10 border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => setActiveTab('dashboard')} className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
          <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
        <div className="text-center">
          <h2 className="font-bold text-base text-gray-900 dark:text-white">Conductor Scanner</h2>
          <p className="text-[10px] text-gray-500">TapRide Conductor</p>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-900/10 px-2 py-1.5 rounded-full">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-[9px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">Online</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-5">
        {/* Route Card */}
        <div className="bg-white dark:bg-[#131620] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between mb-8">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/10 rounded-xl flex items-center justify-center text-blue-600">
               <LayoutGrid className="w-5 h-5" />
             </div>
             <div>
               <h4 className="font-bold text-sm text-gray-900 dark:text-white">NB-4521 · Route 138</h4>
               <p className="text-[10px] text-gray-500 flex items-center gap-1">Anuradhapura <ChevronLeft className="w-3 h-3 rotate-180"/> Polonnaruwa</p>
             </div>
           </div>
           <span className="bg-emerald-50 text-emerald-600 text-[9px] font-bold px-2 py-1 rounded-md">ON ROUTE</span>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Scan Passenger QR</h2>
          <p className="text-xs text-gray-500 max-w-[250px] mx-auto">Scan the passenger's QR code to validate boarding and fare payment.</p>
        </div>

        {/* Scanner Box */}
        {scanResult ? (
          <div className="bg-[#1a1f2e] rounded-3xl p-8 flex flex-col items-center justify-center min-h-[350px] relative overflow-hidden shadow-2xl">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ticket Validated</h3>
            <p className="text-sm text-gray-400 mb-8 break-all text-center">{scanResult}</p>
            <button onClick={() => setScanResult(null)} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-colors">
              Scan Next Ticket
            </button>
          </div>
        ) : (
          <div className="bg-[#1a1f2e] rounded-3xl p-4 flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden shadow-2xl border border-gray-800">
            <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-4">Camera Scanner</p>
            <div className="w-full h-full relative z-10 scanner-wrapper">
              <div id="reader" className="w-full rounded-2xl overflow-hidden [&>div]:border-none [&_video]:rounded-2xl"></div>
            </div>
            <p className="text-[10px] text-gray-400 mt-6">Align the QR code inside the frame</p>

            {/* Controls */}
            <div className="flex gap-3 mt-6 w-full px-4">
              <button onClick={() => handleAction('Flash Toggle', 'Toggle device flashlight.')} className="flex-1 bg-white/10 hover:bg-white/20 text-white rounded-xl py-3 text-xs font-bold flex items-center justify-center gap-2 backdrop-blur-md transition-colors">
                <Flashlight className="w-4 h-4" /> Flash
              </button>
              <button onClick={() => handleAction('Manual Entry', 'Open keypad for manual ticket ID entry.')} className="flex-1 bg-white hover:bg-gray-100 text-gray-900 rounded-xl py-3 text-xs font-bold flex items-center justify-center gap-2 transition-colors">
                <Keyboard className="w-4 h-4" /> Manual Entry
              </button>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-4 flex gap-3">
           <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0">
             <Info className="w-4 h-4" />
           </div>
           <div>
             <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">Boarding validation</h4>
             <p className="text-[10px] text-gray-500 leading-relaxed">Make sure the passenger's QR code is clearly visible. The system will validate the QR and record the boarding transaction.</p>
           </div>
        </div>

        {/* Last Scan */}
        <div className="mt-8 mb-4">
           <h3 className="font-bold text-gray-900 dark:text-white mb-4">Last Successful Scan</h3>
           <div className="bg-white dark:bg-[#131620] border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-5 h-5" />
                 </div>
                 <div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white">Passenger TR-2048</h4>
                    <p className="text-[10px] text-gray-500">QR validated · 11:18 AM</p>
                 </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                 <span className="font-bold text-emerald-600">Rs. 52</span>
                 <span className="text-[8px] text-gray-400 uppercase tracking-widest font-bold">PAID</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function PlaceholderView({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">{title}</h2>
        <p className="text-gray-400 dark:text-gray-600 text-sm">This section is under construction.</p>
      </div>
    </div>
  );
}

function NavItem({ icon: Icon, label, isActive, onClick }: any) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center justify-center w-16 h-12 rounded-xl transition-all ${isActive ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}>
      <Icon className={`w-5 h-5 mb-1 transition-transform ${isActive ? 'scale-110 stroke-[2.5px]' : ''}`} />
      <span className="text-[9px] font-medium tracking-wide">{label}</span>
    </button>
  );
}
