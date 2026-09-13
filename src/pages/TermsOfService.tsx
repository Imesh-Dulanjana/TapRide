import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export default function TermsOfService() {
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
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Terms of Service</h1>
            <p className="text-sm text-gray-500">Last updated: August 2026</p>
          </div>
        </div>

        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the TapRide platform ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service. TapRide provides a digital public transport management and ticketing system connecting passengers, conductors, and bus owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. User Accounts</h2>
            <p>
              You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account and password. TapRide cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Ticketing and Payments</h2>
            <p>
              All digital tickets purchased through TapRide are subject to the respective transport operator's policies. TapRide acts as a payment facilitator and is not directly responsible for transit delays, cancellations, or service quality. Refunds for unused tickets are handled according to the specific operator's refund policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Operator and Conductor Obligations</h2>
            <p>
              Bus Owners (Operators) and Conductors must possess valid National Transport Commission (NTC) permits and relevant licenses to use the platform. TapRide reserves the right to suspend or terminate accounts that fail KYC verification or violate local transport laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5. Limitation of Liability</h2>
            <p>
              TapRide shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
