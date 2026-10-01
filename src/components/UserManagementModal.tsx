import { X, Users, Shield } from 'lucide-react';

export default function UserManagementModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#121622] rounded-2xl max-w-2xl w-full border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden max-h-[80vh] flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-[#0a0c14] shrink-0">
          <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><Users className="w-4 h-4 text-blue-500" /> User & Role Management</h3>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500"><X className="w-4 h-4" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 dark:bg-gray-800 text-xs text-gray-500 uppercase font-bold">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-900 dark:text-gray-300">
              <tr>
                <td className="px-4 py-3 font-medium">Asela Pathirana</td>
                <td className="px-4 py-3"><span className="px-2 py-1 text-[10px] rounded bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 font-bold uppercase">Operator</span></td>
                <td className="px-4 py-3"><span className="text-emerald-500 font-bold text-xs">Active</span></td>
                <td className="px-4 py-3 text-right"><button onClick={() => alert("User editing is disabled in this demo.")} className="text-blue-600 hover:underline">Edit</button></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Kamal Perera</td>
                <td className="px-4 py-3"><span className="px-2 py-1 text-[10px] rounded bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 font-bold uppercase">Conductor</span></td>
                <td className="px-4 py-3"><span className="text-emerald-500 font-bold text-xs">Active</span></td>
                <td className="px-4 py-3 text-right"><button onClick={() => alert("User editing is disabled in this demo.")} className="text-blue-600 hover:underline">Edit</button></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Nimal Silva</td>
                <td className="px-4 py-3"><span className="px-2 py-1 text-[10px] rounded bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 font-bold uppercase">Passenger</span></td>
                <td className="px-4 py-3"><span className="text-emerald-500 font-bold text-xs">Active</span></td>
                <td className="px-4 py-3 text-right"><button onClick={() => alert("User editing is disabled in this demo.")} className="text-blue-600 hover:underline">Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
