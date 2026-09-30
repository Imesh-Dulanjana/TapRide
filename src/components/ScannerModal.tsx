import { X, QrCode } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ScannerModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setScanned(false);
      const timer = setTimeout(() => {
        setScanned(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[100] flex-col">
      <div className="absolute top-4 right-4 z-10">
        <button onClick={onClose} className="p-2 bg-black/50 rounded-full text-white"><X className="w-6 h-6" /></button>
      </div>
      
      {!scanned ? (
        <>
          <div className="relative w-64 h-64 border-2 border-emerald-500 rounded-lg flex items-center justify-center mb-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 animate-[scan_2s_ease-in-out_infinite] shadow-[0_0_10px_#10b981]" style={{
              animation: 'scan 1.5s linear infinite alternate'
            }}></div>
            <style>{`
              @keyframes scan {
                0% { top: 0; }
                100% { top: 100%; }
              }
            `}</style>
            <p className="text-emerald-500/50 font-mono text-sm tracking-widest">POSITION QR CODE</p>
          </div>
          <p className="text-white">Scanning passenger e-ticket...</p>
        </>
      ) : (
        <div className="bg-white dark:bg-[#121622] rounded-2xl p-8 max-w-sm w-full mx-4 text-center border-t-4 border-emerald-500">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl"></span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Valid Season Pass</h2>
          <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-6">TR-48992 • Seat A12</p>
          <button onClick={onClose} className="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-3 rounded-lg font-bold">Done</button>
        </div>
      )}
    </div>
  );
}
