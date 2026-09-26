import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, 
  Activity,
  ChevronRight,
  Clock,
  Circle,
  Square,
  Layout,
  Menu,
  Bell,
  MoreHorizontal
} from 'lucide-react';
import ActionModal from '../components/ActionModal';

export default function OperatorDashboard() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({ title: '', msg: '' });

  const handleAction = (title: string, msg: string) => {
    setModalContent({ title, msg });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] dark:bg-[#06080f] font-sans pb-20">
      <ActionModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title={modalContent.title} 
        message={modalContent.msg} 
      />

      {/* TOP NAVIGATION */}
      <div className="bg-transparent px-6 py-8 flex justify-between items-center max-w-5xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#1d4ed8] rounded-xl flex items-center justify-center text-white font-bold text-sm">
            RP
          </div>
          <div>
            <h2 className="text-[15px] font-bold text-[#111827] dark:text-white leading-tight">Ruwan Perera</h2>
            <p className="text-[11px] text-[#6b7280] font-medium">Bus Owner · TapRide</p>
          </div>
        </div>
        <button 
          onClick={() => handleAction('Notifications', 'You have 3 unread system alerts regarding your active fleet.')}
          className="w-12 h-12 bg-[#f3f4f6] dark:bg-gray-800 rounded-2xl flex items-center justify-center transition-colors relative"
        >
          <div className="w-4 h-4 bg-[#6b7280] rounded-full"></div>
          <span className="absolute top-3 right-3 w-2 h-2 bg-[#ef4444] rounded-full border-2 border-white dark:border-[#0a0c14]"></span>
        </button>
      </div>

      <main className="max-w-2xl mx-auto px-6 space-y-8">
        
        {/* HEADER */}
        <div>
          <p className="text-[11px] text-[#6b7280] font-medium mb-1">Good morning</p>
          <h1 className="text-[28px] font-bold text-[#111827] dark:text-white mb-2 leading-tight">Owner Dashboard</h1>
          <p className="text-[12px] text-[#6b7280]">Manage your fleet and monitor today's TapRide operations.</p>
        </div>

        {/* STATUS BANNER */}
        <div className="bg-white dark:bg-[#0a0c14] border border-[#f3f4f6] dark:border-gray-800 rounded-3xl p-5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#ecfdf5] dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-[#10b981]" strokeWidth={3} />
            </div>
            <div>
              <h3 className="text-[13px] font-bold text-[#111827] dark:text-white mb-0.5">TapRide Operations</h3>
              <p className="text-[10px] text-[#6b7280]">Fleet services are running normally</p>
            </div>
          </div>
          <span className="bg-[#ecfdf5] dark:bg-emerald-500/10 text-[#10b981] font-bold text-[9px] px-3 py-1.5 rounded-lg uppercase tracking-widest">
            Online
          </span>
        </div>

        {/* TODAY'S OVERVIEW */}
        <div>
          <div className="flex justify-between items-center mb-4 px-1">
            <h3 className="text-[15px] font-bold text-[#111827] dark:text-white">Today's Overview</h3>
            <span onClick={() => handleAction('Overview Filter', 'Timeline filtering will be available here.')} className="text-[10px] font-bold text-[#2563eb] uppercase tracking-widest cursor-pointer">Today</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* TOTAL BUSES */}
            <div className="bg-white dark:bg-[#0a0c14] border border-[#f3f4f6] dark:border-gray-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between h-36">
              <div className="w-10 h-10 bg-[#eff6ff] rounded-xl flex items-center justify-center mb-6">
                <Square className="w-4 h-4 text-[#3b82f6]" fill="currentColor" />
              </div>
              <div>
                <p className="text-[8px] text-[#9ca3af] font-bold uppercase tracking-widest mb-1">TOTAL BUSES</p>
                <h3 className="text-3xl font-bold text-[#111827] dark:text-white leading-none">06</h3>
              </div>
            </div>
            {/* ACTIVE BUSES */}
            <div className="bg-white dark:bg-[#0a0c14] border border-[#f3f4f6] dark:border-gray-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between h-36">
              <div className="w-10 h-10 bg-[#ecfdf5] rounded-xl flex items-center justify-center mb-6">
                <Check className="w-5 h-5 text-[#10b981]" strokeWidth={3} />
              </div>
              <div>
                <p className="text-[8px] text-[#9ca3af] font-bold uppercase tracking-widest mb-1">ACTIVE BUSES</p>
                <h3 className="text-3xl font-bold text-[#111827] dark:text-white leading-none">04</h3>
              </div>
            </div>
            {/* TOTAL JOURNEYS */}
            <div className="bg-white dark:bg-[#0a0c14] border border-[#f3f4f6] dark:border-gray-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between h-36">
              <div className="w-10 h-10 bg-[#fffbeb] rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-4 h-4 text-[#f59e0b]" />
              </div>
              <div>
                <p className="text-[8px] text-[#9ca3af] font-bold uppercase tracking-widest mb-1">TOTAL JOURNEYS</p>
                <h3 className="text-3xl font-bold text-[#111827] dark:text-white leading-none">186</h3>
              </div>
            </div>
            {/* CREW MEMBERS */}
            <div className="bg-white dark:bg-[#0a0c14] border border-[#f3f4f6] dark:border-gray-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between h-36">
              <div className="w-10 h-10 bg-[#f5f3ff] rounded-xl flex items-center justify-center mb-6">
                <Circle className="w-4 h-4 text-[#8b5cf6]" fill="currentColor" />
              </div>
              <div>
                <p className="text-[8px] text-[#9ca3af] font-bold uppercase tracking-widest mb-1">CREW MEMBERS</p>
                <h3 className="text-3xl font-bold text-[#111827] dark:text-white leading-none">12</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
  <div className="w-full">
  {/* REVENUE */}
        <div>
          <div className="flex justify-between items-center mb-4 px-1">
            <h3 className="text-[15px] font-bold text-[#111827] dark:text-white">Revenue</h3>
            <span onClick={() => handleAction('Revenue Report', 'Detailed revenue analytics are currently being generated.')} className="text-[10px] font-bold text-[#2563eb] uppercase tracking-widest cursor-pointer">View Report</span>
          </div>
          <div className="bg-[#1d4ed8] rounded-[32px] p-8 text-white relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-30 -translate-y-1/3 translate-x-1/3"></div>
            
            <div className="relative z-10">
              <p className="text-[10px] text-blue-200/80 font-bold uppercase tracking-widest mb-3">TODAY'S FARE REVENUE</p>
              <h3 className="text-[40px] font-bold mb-3 tracking-tight">Rs. 48,650</h3>
              <p className="text-[11px] text-blue-100 flex items-center gap-1.5 mb-10">
                <Activity className="w-3.5 h-3.5" /> 8.4% compared with yesterday
              </p>

              {/* Bar Chart Simulation */}
              <div className="h-28 flex items-end justify-between gap-3 mt-4">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => {
                  const heights = ['h-10', 'h-16', 'h-14', 'h-20', 'h-16', 'h-28', 'h-16', 'h-12', 'h-14', 'h-24', 'h-18', 'h-22', 'h-32', 'h-20'];
                  const isToday = day === 'S' && i === 13;
                  return (
                    <div key={i} className="flex flex-col items-center flex-1 gap-2.5">
                      <div className={`w-full rounded-lg ${isToday ? 'bg-white shadow-sm' : 'bg-blue-400/40'} ${heights[i]} transition-all`}></div>
                      <span className={`text-[9px] font-bold ${isToday ? 'text-white' : 'text-blue-300'}`}>{day}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

          </div>
  <div className="w-full">
  {/* ACTIVE BUSES */}
        <div>
          <div className="flex justify-between items-center mb-4 px-1">
            <h3 className="text-[15px] font-bold text-[#111827] dark:text-white">Active Buses</h3>
            <span onClick={() => handleAction('Fleet Status', 'Full active fleet tracking list will open here.')} className="text-[10px] font-bold text-[#2563eb] uppercase tracking-widest cursor-pointer">View All</span>
          </div>
          <div className="space-y-4">
            {[
              { plate: 'NB-4521', route: 'Route 41 · Anuradhapura → Polonnaruwa', pax: '186', status: 'ON ROUTE' },
              { plate: 'NB-7184', route: 'Route 87 · Kekirawa → Anuradhapura', pax: '142', status: 'ON ROUTE' },
              { plate: 'NB-3298', route: 'Route 52 · Medawachchiya → Mihintale', pax: '—', status: 'IDLE' },
              { plate: 'NB-8822', route: 'Route 41 · Polonnaruwa → Anuradhapura', pax: '115', status: 'ON ROUTE' },
              { plate: 'NB-1092', route: 'Route 87 · Anuradhapura → Kekirawa', pax: '92', status: 'ON ROUTE' },
              { plate: 'NB-5544', route: 'Route 48 · Habarana → Polonnaruwa', pax: '—', status: 'MAINTENANCE' },
            ].map((bus, i) => (
              <div key={i} onClick={() => handleAction('Live Tracking', `Loading live GPS and passenger data for bus ${bus.plate}...`)} className="bg-white dark:bg-[#0a0c14] border border-[#f3f4f6] dark:border-gray-800 rounded-3xl p-5 flex items-center justify-between shadow-sm cursor-pointer hover:border-blue-100 transition-colors">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-[#eff6ff] dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-[#3b82f6] shrink-0">
                    <Square className="w-5 h-5" fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#111827] dark:text-white mb-1.5">{bus.plate}</h4>
                    <p className="text-[10px] text-[#9ca3af]">{bus.route}</p>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end">
                  <span className="text-[14px] font-bold text-[#111827] dark:text-white mb-1.5">{bus.pax}</span>
                  <span className={`text-[8px] font-bold px-2.5 py-1 rounded-md uppercase tracking-widest ${
                    bus.status === 'ON ROUTE' ? 'bg-[#ecfdf5] text-[#10b981] dark:bg-emerald-500/10' : 'bg-[#f3f4f6] text-[#6b7280] dark:bg-gray-800'
                  }`}>
                    {bus.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

          </div>
</div>

{/* QUICK ACTIONS */}
        <div className="pb-8">
          <h3 className="text-[15px] font-bold text-[#111827] dark:text-white mb-4 px-1">Quick Actions</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { name: 'Fleet', icon: Square },
              { name: 'Crew', icon: MoreHorizontal },
              { name: 'Reports', icon: Menu },
              { name: 'Maintenance', icon: Activity },
              { name: 'Schedules', icon: Clock },
              { name: 'Alerts', icon: Bell }
            ].map((action, i) => (
              <div key={i} onClick={() => handleAction(`${action.name} Management`, `Opening the ${action.name} management module...`)} className="bg-white dark:bg-[#0a0c14] border border-[#f3f4f6] dark:border-gray-800 rounded-2xl py-5 flex flex-col items-center justify-center gap-4 shadow-sm hover:border-blue-200 transition-all cursor-pointer">
                <div className="w-12 h-12 bg-[#f3f4f6] dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                  <action.icon className="w-5 h-5 text-[#4b5563] dark:text-gray-400" />
                </div>
                <span className="text-[12px] font-bold text-[#111827] dark:text-white">{action.name}</span>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
