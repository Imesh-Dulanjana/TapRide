import { useState } from 'react';
import { X, CreditCard, Calendar } from 'lucide-react';

export default function SeasonPassModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [routePrice, setRoutePrice] = useState(4500);
  const [duration, setDuration] = useState(1);

  if (!isOpen) return null;

  const discount = duration === 1 ? 1 : duration === 3 ? 0.95 : duration === 6 ? 0.9 : 0.85;
  const totalPrice = routePrice * duration * discount;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#121622] rounded-2xl max-w-lg w-full border border-gray-200 dark:border-gray-800 shadow-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-500" /> Apply for Season Pass
          </h2>
          <button onClick={onClose} className="p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"><X className="w-4 h-4" /></button>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Purchase a discounted season pass for unlimited rides on a specific route.</p>
        
        <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">Route</label>
            <select 
              className="w-full bg-gray-50 dark:bg-[#0a0c14] border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-gray-900 dark:text-white outline-none focus:border-blue-500"
              onChange={(e) => setRoutePrice(Number(e.target.value))}
            >
              <option value="4500">Anuradhapura ↔ Polonnaruwa (Rs. 4,500/mo)</option>
              <option value="1500">Anuradhapura ↔ Mihintale (Rs. 1,500/mo)</option>
              <option value="3000">Polonnaruwa ↔ Habarana (Rs. 3,000/mo)</option>
              <option value="2000">Anuradhapura ↔ Thambuttegama (Rs. 2,000/mo)</option>
            </select>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">Start Month</label>
              <input type="month" className="w-full bg-gray-50 dark:bg-[#0a0c14] border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-gray-900 dark:text-white outline-none focus:border-blue-500" required />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">Duration</label>
              <select 
                className="w-full bg-gray-50 dark:bg-[#0a0c14] border border-gray-300 dark:border-gray-700 rounded p-2 text-sm text-gray-900 dark:text-white outline-none focus:border-blue-500"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
              >
                <option value="1">1 Month</option>
                <option value="3">3 Months (5% off)</option>
                <option value="6">6 Months (10% off)</option>
                <option value="12">12 Months (15% off)</option>
              </select>
            </div>
          </div>
          
          <div className="pt-6 mt-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex justify-between items-center mb-4 text-sm">
              <span className="text-gray-600 dark:text-gray-400">Total Price:</span>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Rs. {totalPrice.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              </span>
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-colors">
              <CreditCard className="w-4 h-4" /> Pay via Payment Gateway
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
