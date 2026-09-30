import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0c14] border-t border-gray-900 pt-8 pb-6 px-4 sm:px-6 mt-auto">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-gray-900 dark:text-white font-bold mb-4 flex items-center gap-2">
              TapRide
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
              A unified digital mobility console for private bus transportation. 
              Designed to streamline digital ticketing, fleet management, and passenger journeys across the network.
            </p>
          </div>
          
          <div>
            <h4 className="text-gray-900 dark:text-white text-sm font-bold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/about" className="hover:text-blue-600 dark:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/legal/privacy" className="hover:text-blue-600 dark:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/terms" className="hover:text-blue-600 dark:text-blue-400 transition-colors">Terms of Use</Link></li>
              <li><Link to="/legal/cookies" className="hover:text-blue-600 dark:text-blue-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 dark:text-white text-sm font-bold mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/#faq" className="hover:text-blue-600 dark:text-blue-400 transition-colors">Help Center & FAQ</a></li>
              <li><a href="mailto:support@tapride.lk" className="hover:text-blue-600 dark:text-blue-400 transition-colors">Contact Authority</a></li>
              <li><a href="mailto:issues@tapride.lk" className="hover:text-blue-600 dark:text-blue-400 transition-colors">Report an Issue</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2026 TapRide — Private Bus Season Ticket & Online Booking System.</p>
          <p className="mt-2 md:mt-0">University Group Project • React & SQL Ready Architecture</p>
        </div>
      </div>
    </footer>
  );
}
