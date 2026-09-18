import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('TapRide_cookie_consent');
    if (!hasConsented) {
      // Small delay to allow the page to load first
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('TapRide_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-white dark:bg-[#121622] border border-gray-300 dark:border-gray-700 shadow-2xl shadow-black/50 rounded-2xl p-5 z-50 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      <div className="flex gap-4 items-start">
        <div className="bg-blue-600/20 p-2 rounded-lg shrink-0 mt-1">
          <Cookie className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-1">We value your privacy</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
            We use strictly necessary cookies to ensure the core functionality of the TapRide portal (such as session management). We do not use third-party tracking cookies. Read our <Link to="/legal/cookies" className="text-blue-600 dark:text-blue-400 hover:underline">Cookie Policy</Link> and <Link to="/legal/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link> for more information.
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
        <button 
          onClick={() => setIsVisible(false)}
          className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors"
        >
          Decline Optional
        </button>
        <button 
          onClick={acceptCookies}
          className="flex-1 sm:flex-none px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-[0_0_10px_rgba(37,99,235,0.2)] transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
