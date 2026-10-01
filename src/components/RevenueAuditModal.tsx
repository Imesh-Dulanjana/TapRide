import { X, TrendingUp, Download } from 'lucide-react';

export default function RevenueAuditModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#121622] rounded-2xl max-w-2xl w-full border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-[#0a0c14]">
          <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><TrendingUp className="w-4 h-4 text-emerald-500" /> Revenue Audit</h3>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500"><X className="w-4 h-4" /></button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-[#0a0c14] p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
              <div className="text-xs text-gray-500 font-bold uppercase mb-1">Today's Revenue</div>
              <div className="text-xl font-bold text-emerald-600">Rs. 18,450</div>
            </div>
            <div className="bg-gray-50 dark:bg-[#0a0c14] p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
              <div className="text-xs text-gray-500 font-bold uppercase mb-1">Weekly Average</div>
              <div className="text-xl font-bold text-blue-600">Rs. 142,000</div>
            </div>
            <div className="bg-gray-50 dark:bg-[#0a0c14] p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
              <div className="text-xs text-gray-500 font-bold uppercase mb-1">Season Pass Share</div>
              <div className="text-xl font-bold text-purple-600">62%</div>
            </div>
          </div>
          <div className="h-40 flex items-end justify-between gap-2 border-b border-gray-200 dark:border-gray-800 pb-2 mb-4 px-4">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="w-full bg-emerald-500/20 hover:bg-emerald-500/40 rounded-t cursor-pointer transition-colors relative group" style={{ height: `${h}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">Day {i+1}</div>
              </div>
            ))}
          </div>
          <button className="w-full flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white py-3 rounded-lg font-medium transition-colors">
            <Download className="w-4 h-4" /> Download PDF Report
          </button>
        </div>
      </div>
    </div>
  );
}
