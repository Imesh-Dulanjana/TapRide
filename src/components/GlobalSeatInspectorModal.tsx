import { X, Clock, Users } from 'lucide-react';

export default function GlobalSeatInspectorModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#121622] rounded-2xl max-w-3xl w-full border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-[#0a0c14] shrink-0">
          <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-yellow-500" /> Network Seat Inspector
          </h3>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500"><X className="w-4 h-4" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-[#06080f]">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Real-time occupancy metrics for the next departing fleet on the North Central network.</p>
          
          <div className="space-y-4">
            {[
              { id: 'NC-1234', route: 'Anuradhapura → Polonnaruwa', time: '06:00 AM', booked: 45, total: 50, type: 'LUXURY EXPRESS' },
              { id: 'NC-9012', route: 'Anuradhapura → Mihintale', time: '05:30 AM', booked: 12, total: 50, type: 'NORMAL' },
              { id: 'NC-7880', route: 'Anuradhapura → Kekirawa', time: '07:30 AM', booked: 38, total: 40, type: 'SEMI-LUXURY' },
              { id: 'NC-3456', route: 'Polonnaruwa → Habarana', time: '08:00 PM', booked: 40, total: 40, type: 'NIGHT RIDER' }
            ].map(bus => {
              const percent = Math.round((bus.booked / bus.total) * 100);
              let statusColor = "bg-emerald-500";
              if (percent > 70) statusColor = "bg-yellow-500";
              if (percent >= 100) statusColor = "bg-red-500";

              return (
                <div key={bus.id} className="bg-white dark:bg-[#121622] border border-gray-200 dark:border-gray-800 p-4 rounded-xl flex items-center gap-6 shadow-sm">
                  <div className="w-24 shrink-0">
                    <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">{bus.type}</p>
                    <p className="font-mono text-sm text-gray-900 dark:text-white font-bold">{bus.id}</p>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{bus.route}</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Departs: {bus.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900 dark:text-white">{percent}%</p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold">{bus.booked} / {bus.total} Seats</p>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-100 dark:bg-gray-900 rounded-full overflow-hidden">
                      <div className={`h-full ${statusColor}`} style={{ width: `${percent}%` }}></div>
                    </div>
                  </div>
                  
                  <div className="shrink-0 flex items-center justify-center">
                     {percent >= 100 ? (
                       <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded-lg uppercase">Full</span>
                     ) : (
                       <button className="flex items-center gap-1 text-xs bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-3 py-1.5 rounded-lg font-medium transition-colors border border-gray-200 dark:border-gray-700">
                         <Users className="w-3 h-3" /> View Map
                       </button>
                     )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
