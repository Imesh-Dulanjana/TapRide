import { X, Calendar, Search } from 'lucide-react';

export default function BusHolidaysModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#121622] rounded-2xl max-w-lg w-full border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-[#0a0c14]">
          <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-500" /> Manage Bus Holidays</h3>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500"><X className="w-4 h-4" /></button>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Select buses and dates to pause operations. Season pass holders will be notified automatically.</p>
          <div className="flex gap-2 mb-4">
            <input type="date" className="flex-1 bg-gray-50 dark:bg-[#0a0c14] border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-gray-900 dark:text-white" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium">Add Holiday</button>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            <div className="bg-gray-100 dark:bg-[#0a0c14] px-4 py-2 text-xs font-bold text-gray-500 uppercase">Upcoming Holidays</div>
            <div className="p-4 text-sm text-gray-600 dark:text-gray-400 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
              <span>Poya Day (All Fleet)</span>
              <span className="font-medium text-gray-900 dark:text-white">2026-08-25</span>
            </div>
            <div className="p-4 text-sm text-gray-600 dark:text-gray-400 flex justify-between items-center">
              <span>Maintenance - NC-1234</span>
              <span className="font-medium text-gray-900 dark:text-white">2026-08-28</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
