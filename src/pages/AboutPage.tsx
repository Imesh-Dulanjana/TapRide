import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Info, GraduationCap, Building } from 'lucide-react';
import Footer from '../components/Footer';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#06080f] text-gray-800 dark:text-gray-200 font-sans flex flex-col">
      <header className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0c14] sticky top-0 z-10">
        <div className="max-w-[1000px] mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">About The Project</span>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1000px] mx-auto p-8 py-12">
        <div className="bg-white dark:bg-[#121622] rounded-2xl border border-gray-200 dark:border-gray-800 p-8 md:p-12 shadow-xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">About TapRide</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl">
              A digital mobility initiative aimed at revolutionizing private bus transportation in the North Central Province through secure, offline-first season passes and unified fleet management.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-[#0a0c14] p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg border border-blue-200 dark:border-blue-500/20">
                    <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Academic Initiative</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  This system is developed by a dedicated group of four undergraduate students from <strong>The Open University of Sri Lanka (2 from the Anuradhapura Regional Centre, and 2 from the Polonnaruwa Study Centre)</strong>. It serves as a comprehensive academic project titled <em>"Digital Season Pass and Bus Management System for Private Bus Transportation"</em>.
                </p>
              </div>

              <div className="bg-white dark:bg-[#0a0c14] p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-900/30 p-2 rounded-lg border border-emerald-200 dark:border-emerald-500/20">
                    <Building className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Official Backing & Approval</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  We are proud to be officially backed by the <strong>Road Transport Service Authority (RTSA) - North Central Province</strong>. The Authority has formally acknowledged our proposal and agreed to provide essential guidance, data, and institutional support to ensure this system meets real-world regulatory requirements.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <div className="prose prose-invert max-w-none prose-p:text-gray-600 dark:text-gray-400 prose-p:text-sm prose-p:leading-relaxed">
                <p>
                  Public transport in Sri Lanka's North Central Province relies heavily on private buses. Despite this, operators largely depend on manual cash ticketing and route-specific paper passes. This outdated process causes boarding delays, makes revenue auditing incredibly difficult for owners, and leads to numerous passenger complaints regarding incorrect change and fair calculation.
                </p>
                <p>
                  TapRide (originally conceptualized as TapRide) bridges this gap. By introducing a Progressive Web App (PWA) with QR-based journey validation, offline-first transaction queues for rural connectivity drops, and centralized fleet tracking, we empower both the passengers and the private bus operators.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-6 border-l-2 border-gray-300 dark:border-gray-700 pl-4 italic">
                  Note: This platform is currently operating as an academic prototype for evaluation and is not yet managing live financial settlements.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
