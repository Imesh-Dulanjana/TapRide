import { useState } from 'react';
import { X, Wallet, QrCode, ChevronLeft, CheckCircle2 } from 'lucide-react';

export default function WalletModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [showQR, setShowQR] = useState(false);

  if (!isOpen) {
    if (showQR) setShowQR(false); // Reset state when closed
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#121622] rounded-2xl max-w-sm w-full border border-gray-200 dark:border-gray-800 shadow-2xl p-6 relative overflow-hidden transition-all duration-300">
        
        {/* Main Wallet View */}
        <div className={`transition-all duration-300 ${showQR ? '-translate-x-full absolute opacity-0 invisible' : 'translate-x-0 relative opacity-100 visible'}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Wallet className="w-5 h-5 text-yellow-500" /> My Pass Wallet
            </h2>
            <button onClick={onClose} className="p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"><X className="w-4 h-4" /></button>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-5 text-white shadow-lg mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20"><QrCode className="w-16 h-16" /></div>
            <p className="text-[10px] font-bold tracking-widest uppercase mb-1">Active Season Pass</p>
            <p className="text-lg font-bold mb-4">Anuradhapura ↔ Polonnaruwa</p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] opacity-80 uppercase">Passenger ID</p>
                <p className="font-mono text-sm">TR-48992</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] opacity-80 uppercase">Expires</p>
                <p className="font-mono text-sm">Aug 31, 2026</p>
              </div>
            </div>
          </div>

          <button onClick={() => setShowQR(true)} className="w-full flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white py-3 rounded-lg font-medium transition-colors">
            <QrCode className="w-4 h-4" /> Show QR to Conductor
          </button>
        </div>

        {/* QR Code View */}
        <div className={`transition-all duration-300 ${!showQR ? 'translate-x-full absolute opacity-0 invisible top-6 left-6 right-6' : 'translate-x-0 relative opacity-100 visible'}`}>
          <div className="flex items-center mb-6">
            <button onClick={() => setShowQR(false)} className="p-1 -ml-1 mr-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"><ChevronLeft className="w-5 h-5" /></button>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 flex-1">
              Scan Pass
            </h2>
            <button onClick={onClose} className="p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"><X className="w-4 h-4" /></button>
          </div>

          <div className="flex flex-col items-center justify-center py-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6 inline-block">
               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6AQMAAACyIsh+AAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABI0lEQVRoge3YuxGDMBAE0GMICCmBUlwalEYplEBIwPiM7oOwx5/AcEp2x4EHnhPvIHQi+pWePRNRdyeqeaz3azwAnAdm/csrnqpkbqsYvdgABINUylx5WSSgkaYASoFjWQBlgTw+W0aAYiAvYnb38yoH8A9gzyRm/PJyB7gWPEf7os8BuBBYWbPcYtnT8kq3hXr5AAQCS3uXdYzyhvZ4FyAGtFtTlMs6zhdqAM4Cks2k2aE7LFD6wAwAocDWqLSP0rLI1igPQBjw6LOz97VNEAtAJOjZs+9pebVf9ACxIM963tc+VvPLMSzAvyB9sdOkymdqBdYFQAlAMj6wlGUrGEAZkN/ddqwHEAwkDjRpH/X2lBXgSsCeSfdR+uJuclkAUeBXHscyYxYLm0uoAAAAAElFTkSuQmCC" alt="Pass QR Code" className="w-40 h-40 object-contain rounded-lg" />
            </div>
            
            <p className="font-mono text-sm tracking-widest text-gray-600 dark:text-gray-400 mb-2">TR-48992-SEQ29</p>
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-500 text-sm font-bold bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-4 h-4" /> Pass Valid
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
