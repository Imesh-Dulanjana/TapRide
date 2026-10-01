import { X, Map } from 'lucide-react';

export default function RouteManagementModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#121622] rounded-2xl max-w-lg w-full border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-[#0a0c14]">
          <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><Map className="w-4 h-4 text-emerald-500" /> Route & Fare Management</h3>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500"><X className="w-4 h-4" /></button>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Base fares per kilometer for North Central Province routes.</p>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-2">
              <span className="text-sm font-medium">Anuradhapura ↔ Polonnaruwa</span>
              <span className="font-bold text-gray-900 dark:text-white">Rs. 850</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-2">
              <span className="text-sm font-medium">Anuradhapura ↔ Mihintale</span>
              <span className="font-bold text-gray-900 dark:text-white">Rs. 150</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-2">
              <span className="text-sm font-medium">Anuradhapura ↔ Medawachchiya</span>
              <span className="font-bold text-gray-900 dark:text-white">Rs. 350</span>
            </div>
          </div>
          <button onClick={() => alert("Fare table editing is disabled in this demo.")} className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium">Update Fare Tables</button>
        </div>
      </div>
    </div>
  );
}
