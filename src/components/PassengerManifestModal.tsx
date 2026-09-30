import { X, Users, Printer } from 'lucide-react';

export default function PassengerManifestModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#121622] rounded-2xl max-w-2xl w-full border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-[#0a0c14] shrink-0">
          <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><Users className="w-4 h-4 text-blue-500" /> Trip Manifest - NC-1234</h3>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500"><X className="w-4 h-4" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-4 flex gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div><span className="font-bold">Total:</span> 38 / 50</div>
            <div><span className="font-bold">Checked In:</span> 12</div>
          </div>
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 dark:bg-gray-800 text-xs text-gray-500 uppercase font-bold">
              <tr>
                <th className="px-4 py-2">Seat</th>
                <th className="px-4 py-2">Passenger ID</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-900 dark:text-gray-300">
              {['A01', 'A02', 'B04', 'C12', 'D15'].map(seat => (
                <tr key={seat} className="hover:bg-gray-50 dark:hover:bg-[#0a0c14]">
                  <td className="px-4 py-3 font-medium">{seat}</td>
                  <td className="px-4 py-3 font-mono text-xs">TR-{Math.floor(Math.random() * 90000) + 10000}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-[10px] rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 font-bold uppercase">Season Pass</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-emerald-500 font-bold text-xs">Checked In</span>
                  </td>
                </tr>
              ))}
              {['E22', 'F30', 'G35'].map(seat => (
                <tr key={seat} className="hover:bg-gray-50 dark:hover:bg-[#0a0c14]">
                  <td className="px-4 py-3 font-medium">{seat}</td>
                  <td className="px-4 py-3 font-mono text-xs">TR-{Math.floor(Math.random() * 90000) + 10000}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-[10px] rounded bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 font-bold uppercase">Spot Ticket</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-gray-500 font-bold text-xs">Pending</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0a0c14] shrink-0">
          <button className="w-full flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors">
            <Printer className="w-4 h-4" /> Print Conductor Copy
          </button>
        </div>
      </div>
    </div>
  );
}
