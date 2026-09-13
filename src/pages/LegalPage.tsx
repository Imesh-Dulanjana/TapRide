import { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Shield, FileText, Cookie, Info, ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

type PolicyData = {
  title: string;
  icon: any;
  lastUpdated: string;
  content: string;
};

const policies: Record<string, PolicyData> = {
  'privacy': {
    title: 'Privacy Policy',
    icon: Shield,
    lastUpdated: 'August 15, 2026',
    content: `
      <h2>1. Information We Collect</h2>
      <p>We collect information you provide directly to us when you register for an account, top up your digital wallet, or contact support. This includes your name, mobile number, National Identity Card (NIC) number, and encrypted password.</p>
      
      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to operate, maintain, and provide the features and functionality of the TapRide service, to process your transactions, and to communicate directly with you.</p>
      
      <h2>3. Data Security</h2>
      <p>We implement appropriate technical and organizational security measures to protect your personal information. Passwords are cryptographically hashed, and payment processing is handled entirely by secure third-party gateways (Stripe).</p>
      
      <h2>4. Offline Synchronization Data</h2>
      <p>Journey validation events may be temporarily stored locally on your device or the conductor's device when operating in offline mode. This data is synchronized with our servers securely once connectivity is restored.</p>
    `
  },
  'terms': {
    title: 'Terms of Use',
    icon: FileText,
    lastUpdated: 'August 15, 2026',
    content: `
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using the TapRide portal, you agree to be bound by these Terms of Use and all applicable laws and regulations.</p>
      
      <h2>2. User Accounts</h2>
      <p>You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
      
      <h2>3. Digital Wallet and Fares</h2>
      <p>Funds added to the digital wallet are non-transferable and can only be used for journey fare payments within the supported transport network. In the event of a disputed fare calculation due to offline synchronization delays, users may file an appeal through the portal within 7 days.</p>
    `
  },
    'cookies': {
    title: 'Cookie Policy',
    icon: Cookie,
    lastUpdated: 'August 15, 2026',
    content: `
      <h2>1. What Are Cookies</h2>
      <p>Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
      
      <h2>2. How We Use Cookies</h2>
      <p>TapRide uses strictly necessary cookies to manage user sessions and authentication tokens (JWTs). We also use local storage (IndexedDB/localStorage) extensively to support the offline-first capabilities of the Progressive Web App (PWA).</p>
      
      <h2>3. Managing Cookies</h2>
      <p>You can set your browser not to accept cookies. However, in a few cases, some of our portal features (such as remaining logged in or processing offline tickets) may not function as a result.</p>
    `
  },
  'refund': {
    title: 'Refund Policy',
    icon: FileText,
    lastUpdated: 'October 2, 2026',
    content: `
      <h2>1. Spot Ticket Cancellations</h2>
      <p>Daily spot tickets can be canceled directly through the app up to 2 hours before the scheduled bus departure time. Upon cancellation, a full 100% refund will be credited instantly back to your TapRide digital wallet.</p>
      
      <h2>2. Season Pass Refunds</h2>
      <p>Monthly season passes are non-refundable once the validity period has commenced. If you accidentally purchase a pass, you may request a refund within 24 hours of purchase, provided the pass has not yet become active.</p>
      
      <h2>3. Operational Cancellations</h2>
      <p>If a bus operator cancels a scheduled journey or a bus breaks down mid-journey, affected spot ticket holders will receive an automatic full refund. Season pass holders will have their pass validity extended by one day.</p>
    `
  }
};

export default function LegalPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.split('/').pop() || 'terms';
  
  const [policy, setPolicy] = useState<PolicyData>(policies['terms']);

  useEffect(() => {
    if (policies[path]) {
      setPolicy(policies[path]);
    } else {
      setPolicy({
        title: 'Information',
        icon: Info,
        lastUpdated: 'August 15, 2026',
        content: '<p>The requested policy document could not be found. Please contact support.</p>'
      });
    }
  }, [path]);

  const Icon = policy.icon;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#06080f] text-gray-800 dark:text-gray-200 font-sans flex flex-col">
      <header className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0c14] sticky top-0 z-10">
        <div className="max-w-[1000px] mx-auto flex items-center">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1000px] mx-auto p-8 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Side Navigation */}
          <aside className="w-full md:w-64 shrink-0">
            <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Legal Directory</h3>
            <nav className="flex flex-col space-y-1">
              {Object.keys(policies).map(key => {
                const isActive = path === key;
                return (
                  <Link 
                    key={key}
                    to={`/legal/${key}`}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20' : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:bg-gray-800/50'}`}
                  >
                    {policies[key].title}
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Content Area */}
          <article className="flex-1 bg-white dark:bg-[#121622] rounded-2xl border border-gray-200 dark:border-gray-800 p-8 md:p-12 shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-xl border border-gray-300 dark:border-gray-700">
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{policy.title}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Last Updated: {policy.lastUpdated}</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-gray-100 dark:bg-gray-800 my-8"></div>

            {/* In a real app we might use a markdown renderer, but dangerouslySetInnerHTML works for this structured string demo */}
            <div 
              className="prose prose-invert max-w-none 
                prose-h2:text-lg prose-h2:font-bold prose-h2:text-gray-900 dark:text-white prose-h2:mt-8 prose-h2:mb-4
                prose-p:text-gray-600 dark:text-gray-400 prose-p:leading-relaxed prose-p:text-sm prose-p:mb-4
              "
              dangerouslySetInnerHTML={{ __html: policy.content }}
            />
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
