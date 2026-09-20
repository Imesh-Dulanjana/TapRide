/**
 * TapRide Secure Admin Login Portal
 * 
 * WHAT: 
 * This component provides an isolated authentication gateway exclusively for System Administrators
 * and Super Admins. It handles standard login and password reset requests.
 * 
 * WHY:
 * We separated this from the main AuthPortal.tsx to enforce a strict security boundary.
 * Mixing high-privileged login routes with public-facing passenger/operator logins increases
 * the risk of accidental privilege escalation and exposes the administrative entry point.
 * By keeping this on a hidden/unlinked route (/admin-login), we reduce the attack surface.
 * 
 * FOR THE NEXT DEVELOPER:
 * 1. BACKEND INTEGRATION: The `handleSubmit` function currently fakes authentication and 
 *    directly navigates to `/admin`. You MUST replace this with a real API call to your auth endpoint.
 * 2. JWT TOKENS: Upon successful login, store the returned JWT (preferably in an HttpOnly cookie 
 *    or secure local storage) and update the global authentication context before navigating.
 * 3. RATE LIMITING: Ensure the backend enforces strict rate limiting on this specific route 
 *    to prevent brute-force attacks on admin accounts.
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Lock, ArrowLeft, Send } from 'lucide-react';
import ActionModal from '../components/ActionModal';

export default function AdminLogin() {
  const navigate = useNavigate();
  
  // Controls the current view state of the form (Login vs Password Reset)
  const [authMode, setAuthMode] = useState<'login' | 'forgot'>('login');
  
  // Form credentials state
  // Left empty by default to enforce manual credential entry for security.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Modal state for displaying feedback (e.g., password reset confirmation)
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', msg: '' });

  /**
   * Helper function to trigger the feedback modal.
   */
  const handleAction = (title: string, msg: string) => {
    setModalContent({ title, msg });
    setModalOpen(true);
  };

  /**
   * Handles form submission for both Login and Password Reset flows.
   * 
   * NEXT STEPS: 
   * - Replace the `navigate('/admin')` block with an async `fetch()` or `axios.post()` to your authentication service.
   * - Implement robust error handling to display "Invalid credentials" messages to the user.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authMode === 'login') {
      // TODO: Implement actual secure API authentication here
      navigate('/admin');
    } else {
      // TODO: Implement actual password reset API call here
      handleAction('Reset Link Sent', `A password reset link has been sent to ${email}. Check your inbox.`);
      setAuthMode('login');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#06080f] flex flex-col font-sans">
      {/* 
        HEADER SECTION 
        Provides minimal branding. Kept intentionally sparse to avoid leaking internal system details.
      */}
      <header className="flex justify-center items-center py-6 bg-white dark:bg-[#0a0c14] border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <img src="/logo.png" alt="TapRide Logo" className="w-10 h-10 rounded-xl shadow-sm" />
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              TapRide
            </h1>
            <p className="text-[10px] text-gray-600 dark:text-gray-400 uppercase tracking-widest mt-0.5">Administrator Console</p>
          </div>
        </div>
      </header>

      {/* 
        MAIN AUTHENTICATION CARD 
        Centers the form vertically and horizontally. Uses standard TapRide blue branding 
        rather than red warning colors to maintain a professional UI language.
      */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white dark:bg-[#121622] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
          
          {/* Card Header & Icon */}
          <div className="text-center mb-8">
            <img src="/logo.png" alt="TapRide Logo" className="w-14 h-14 rounded-xl shadow-lg mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {authMode === 'login' ? 'Secure Admin Login' : 'Reset Admin Password'}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {authMode === 'login' 
                ? 'Authorized personnel only. Enter your credentials.' 
                : 'Enter your admin email to receive reset instructions.'}
            </p>
          </div>

          {/* Authentication Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email Input Field */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">Admin Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white dark:bg-[#0a0c14] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="admin@tapride.lk"
                required
              />
            </div>
            
            {/* Password Input Field (Only visible in login mode) */}
            {authMode === 'login' && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Password</label>
                  <button type="button" onClick={() => setAuthMode('forgot')} className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:text-blue-300">Forgot?</button>
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white dark:bg-[#0a0c14] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/20">
              {authMode === 'login' ? <><LogIn className="w-4 h-4" /> Authenticate</> : <><Send className="w-4 h-4" /> Send Reset Link</>}
            </button>
          </form>

          {/* Toggle back to login from password reset mode */}
          {authMode === 'forgot' && (
            <div className="mt-6 text-center text-sm">
              <button type="button" onClick={() => setAuthMode('login')} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white flex items-center justify-center gap-2 mx-auto">
                <ArrowLeft className="w-4 h-4" /> Back to Login
              </button>
            </div>
          )}

        </div>
      </main>
      
      {/* Shared feedback modal for displaying system alerts without breaking layout */}
      <ActionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalContent.title} message={modalContent.msg} />
    </div>
  );
}
