import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#06080f] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white dark:bg-[#0a0c14] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 md:p-12">
        
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </button>

        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
            <p className="text-sm text-gray-500">Last updated: August 2026</p>
          </div>
        </div>

        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Information We Collect</h2>
            <p>
              When you register for a TapRide account, we collect personal information such as your name, email address, phone number, and National Identity Card (NIC) number. For operators and conductors, we additionally collect business registration numbers (BRN) and NTC license data for verification purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to operate, maintain, and improve our services. This includes processing payments, validating tickets, providing customer support, and ensuring the safety and security of the TapRide platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Location Data</h2>
            <p>
              To provide real-time bus tracking and journey histories, TapRide collects location data from Conductor devices and Passenger devices (when explicit permission is granted). This data is used exclusively for transit operations and is never sold to third-party advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal information. We may share necessary information with our trusted transit operator partners strictly for the purpose of facilitating your journey. We may also disclose information if required by law enforcement or regulatory authorities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information and digital wallet balances. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
