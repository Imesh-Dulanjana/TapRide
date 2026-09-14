import { ArrowRight, Bus, ShieldCheck, Clock, CheckCircle2, Ticket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LandingPage() {
  const navigate = useNavigate();
  const [selectedRouteIdx, setSelectedRouteIdx] = useState(0);

  const routes = [
    { name: 'Anuradhapura → Polonnaruwa (120 KM)', spotPrice: 150 },
    { name: 'Anuradhapura → Kekirawa (45 KM)', spotPrice: 80 },
    { name: 'Polonnaruwa → Habarana (40 KM)', spotPrice: 70 },
    { name: 'Anuradhapura → Dambulla (75 KM)', spotPrice: 120 }
  ];

  const currentRoute = routes[selectedRouteIdx];
  const spotMonthly = currentRoute.spotPrice * 40;
  const passMonthly = spotMonthly * 0.75;
  const savings = spotMonthly - passMonthly;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f1c] text-gray-800 dark:text-gray-200 font-sans selection:bg-blue-500/30">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <img src="/logo.png" alt="TapRide Logo" className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl shadow-sm" />
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              TapRide
            </h1>
            <p className="hidden sm:block text-[10px] text-gray-600 dark:text-gray-400 uppercase tracking-widest mt-0.5">Unified Mobility Portal</p>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
          <a href="#features" className="hover:text-gray-900 dark:hover:text-white transition-colors">Key Features</a>
          <a href="#how-it-works" className="hover:text-gray-900 dark:hover:text-white transition-colors">How It Works</a>
          <a href="#fares" className="hover:text-gray-900 dark:hover:text-white transition-colors">Fare Calculator</a>
          <button onClick={() => navigate('/schedules')} className="hover:text-gray-900 dark:hover:text-white transition-colors">Check Schedules</button>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <button onClick={() => navigate('/auth')} className="hidden md:block text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Create Account</button>
          <button onClick={() => navigate('/auth')} className="bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold px-4 sm:px-8 py-2 sm:py-2.5 rounded-full transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-20 pb-16 sm:pb-32 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Unified Private Bus Mobility Platform
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
            One Bus Fleet.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Two Smart Ways to Travel.</span>
          </h2>
          
          <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
            Bridging monthly season pass passengers and daily spot travelers on a single intelligent seat inventory. Enjoy automated daily seat reservations, real-time visual seat selection, and digital QR ticket verification in the North Central Province.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button onClick={() => navigate('/auth')} className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 text-base font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(234,179,8,0.2)] hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] flex items-center justify-center gap-3 transform hover:-translate-y-1">
              <Ticket className="w-5 h-5" /> Get Monthly Season Pass
            </button>
            <button onClick={() => navigate('/auth')} className="bg-gray-50 dark:bg-[#1a2235] hover:bg-gray-200 dark:hover:bg-[#232d45] border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-900 dark:text-white text-base font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-3">
              Book Single Spot Trip
            </button>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Guaranteed Fixed Seats</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Zero Daily Queue</div>
          </div>
        </div>
        
        {/* Mockup Right Side */}
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-emerald-500/20 blur-3xl rounded-full transform -translate-x-10 translate-y-10 -z-10"></div>
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-6">
              <div>
                <div className="text-[10px] font-bold text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded inline-block mb-2">Live Inventory</div>
                <h3 className="text-xl font-bold text-gray-900">Anuradhapura → Polonnaruwa</h3>
              </div>
              <div className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-600 font-mono">NC-1234</div>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-yellow-600">Season Pool (60%)</span>
                <span className="text-red-500">Spot Pool (40%)</span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden flex">
                <div className="h-full bg-yellow-500 w-[60%]"></div>
                <div className="h-full bg-red-500 w-[40%]"></div>
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 mt-2 uppercase tracking-wider">
                <span>32 Reserved Pass Seats</span>
                <span>22 Daily Spot Seats</span>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-[#0a0c14] rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-400 px-2 py-1 rounded">← Entrance Door</span>
                <span className="text-xs text-emerald-500 font-bold flex items-center gap-1">Driver Cabin </span>
              </div>
              
              <div className="grid grid-cols-6 gap-2">
                <div className="bg-yellow-500/20 border border-yellow-500/50 rounded flex items-center justify-center py-3 text-yellow-500 font-bold text-xs">A01</div>
                <div className="bg-yellow-500/20 border border-yellow-500/50 rounded flex items-center justify-center py-3 text-yellow-500 font-bold text-xs">A02</div>
                <div className="flex items-center justify-center text-[10px] text-gray-700 uppercase">Aisle</div>
                <div className="bg-emerald-500 border border-emerald-400 rounded flex items-center justify-center py-3 text-gray-900 font-bold text-xs">A03</div>
                <div className="bg-emerald-500 border border-emerald-400 rounded flex items-center justify-center py-3 text-gray-900 font-bold text-xs">A04</div>
                <div className="bg-red-500/20 border border-red-500/50 rounded flex items-center justify-center py-3 text-red-400 font-bold text-xs">A05</div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
              <span className="text-sm font-medium text-gray-500 flex items-center gap-2"><Clock className="w-4 h-4" /> Departs: 06:00 AM</span>
              <span className="text-sm font-bold text-emerald-600">Auto-Book Engine Active</span>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#060913] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center px-4">
            <h4 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">100%</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Automated Daily Reservations</p>
          </div>
          <div className="text-center px-4">
            <h4 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">60:40</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Smart Seat Allocation Split</p>
          </div>
          <div className="text-center px-4">
            <h4 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">&lt; 1 Sec</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Conductor QR Verification</p>
          </div>
          <div className="text-center px-4">
            <h4 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">30 Days</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Pass Travel Guaranteed</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-24 bg-white dark:bg-[#0a0f1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Everything you need to manage your daily commute or fleet operations.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 text-left">
            <div className="bg-white dark:bg-[#121622] p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6"><CheckCircle2 className="w-6 h-6" /></div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Guaranteed Seats</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Season pass holders get guaranteed fixed seats allocated automatically every single day without manual booking.</p>
            </div>
            <div className="bg-white dark:bg-[#121622] p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-6"><Ticket className="w-6 h-6" /></div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Digital QR Passes</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">No more paper tickets. Show your persistent digital QR pass from your wallet for sub-second conductor verification.</p>
            </div>
            <div className="bg-white dark:bg-[#121622] p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center mb-6"><Bus className="w-6 h-6" /></div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Live Fleet Ratios</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Operators can instantly split their 54-seat buses into custom Season/Spot ratios to maximize daily revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-12 md:py-24 bg-gray-50 dark:bg-[#060913] border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 px-3 py-1.5 rounded-full mb-4 inline-block">Seamless Commute Workflow</span>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How TapRide Operates</h3>
            <p className="text-gray-600 dark:text-gray-400">Designed with tailored journeys for monthly season passengers and occasional spot travelers.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-white dark:bg-[#121622] rounded-3xl p-6 lg:p-12 border border-gray-200 dark:border-gray-800 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/20"><Ticket className="w-6 h-6 text-gray-900" /></div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Monthly Season Passengers</h4>
                  <p className="text-xs text-yellow-700 dark:text-yellow-500 font-medium">Daily automated commuters</p>
                </div>
              </div>
              <ol className="space-y-6 relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-800"></div>
                <li className="flex gap-4 relative">
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 flex items-center justify-center text-xs font-bold shrink-0 ring-4 ring-white dark:ring-[#121622]">1</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><strong className="text-gray-800 dark:text-gray-200 block mb-1">Subscribe Once</strong> Select fleet bus and buy 30-day season pass. System assigns a fixed seat in the 60% season pool.</p>
                </li>
                <li className="flex gap-4 relative">
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 flex items-center justify-center text-xs font-bold shrink-0 ring-4 ring-white dark:ring-[#121622]">2</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><strong className="text-gray-800 dark:text-gray-200 block mb-1">Auto-Booking Engine</strong> Every morning, your seat is automatically reserved for the route trip.</p>
                </li>
                <li className="flex gap-4 relative">
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 flex items-center justify-center text-xs font-bold shrink-0 ring-4 ring-white dark:ring-[#121622]">3</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><strong className="text-gray-800 dark:text-gray-200 block mb-1">Board with QR</strong> Show your persistent QR pass to conductor for scan verification and take your assigned seat.</p>
                </li>
              </ol>
            </div>
            
            <div className="bg-white dark:bg-[#121622] rounded-3xl p-6 lg:p-12 border border-gray-200 dark:border-gray-800 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20"><ShieldCheck className="w-6 h-6 text-gray-900 dark:text-white" /></div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Occasional Spot Travelers</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-400 font-medium">Single trip flexible bookings</p>
                </div>
              </div>
              <ol className="space-y-6 relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-800"></div>
                <li className="flex gap-4 relative">
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 flex items-center justify-center text-xs font-bold shrink-0 ring-4 ring-white dark:ring-[#121622]">1</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><strong className="text-gray-800 dark:text-gray-200 block mb-1">Pick Route & Date</strong> Search operational buses for your desired travel date.</p>
                </li>
                <li className="flex gap-4 relative">
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 flex items-center justify-center text-xs font-bold shrink-0 ring-4 ring-white dark:ring-[#121622]">2</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><strong className="text-gray-800 dark:text-gray-200 block mb-1">Visual Seat Selection</strong> Choose open seats from the 40% spot pool on the interactive bus layout map.</p>
                </li>
                <li className="flex gap-4 relative">
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 flex items-center justify-center text-xs font-bold shrink-0 ring-4 ring-white dark:ring-[#121622]">3</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><strong className="text-gray-800 dark:text-gray-200 block mb-1">Instant Digital Ticket</strong> Complete fare payment and receive a digital QR ticket for instant boarding.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Fare Calculator */}
      <section id="fares" className="py-12 md:py-24 bg-white dark:bg-[#0a0f1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest bg-yellow-100 dark:bg-yellow-500/10 px-3 py-1.5 rounded-full mb-6 inline-block">Fares & Savings Calculator</span>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">Calculate How Much You Save With a Season Pass</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">Select an operational route to compare daily single-trip spot fares against a 30-day monthly season pass subscription.</p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-400"><div className="w-5 h-5 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center justify-center text-[10px] font-bold shrink-0">1</div> <span><strong className="text-gray-800 dark:text-gray-200">Fixed Seat Guarantee:</strong> Reserved seat number locked for 30 consecutive operating days.</span></li>
              <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-400"><div className="w-5 h-5 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center justify-center text-[10px] font-bold shrink-0">2</div> <span><strong className="text-gray-800 dark:text-gray-200">Auto-Booking:</strong> Automated morning seat confirmation without daily manual booking.</span></li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#121622] rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-2xl">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Select Travel Route</label>
            <select 
              value={selectedRouteIdx}
              onChange={(e) => setSelectedRouteIdx(Number(e.target.value))}
              className="w-full bg-gray-50 dark:bg-[#1a2235] border border-gray-300 dark:border-gray-700 rounded-xl p-4 text-gray-900 dark:text-white font-medium mb-6 outline-none">
              {routes.map((r, idx) => (
                <option key={idx} value={idx}>{r.name} — Rs. {r.spotPrice}/spot</option>
              ))}
            </select>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-[#1a2235] rounded-xl p-6 border border-gray-300 dark:border-gray-700 text-center">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Daily Roundtrips (20 Days)</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">Rs. {spotMonthly.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                <p className="text-[10px] text-gray-500">Based on individual spot fares</p>
              </div>
              <div className="bg-yellow-500/5 rounded-xl p-6 border border-yellow-500/20 text-center">
                <p className="text-xs text-yellow-500/80 mb-2">Monthly Season Pass</p>
                <p className="text-2xl font-bold text-yellow-500 mb-1">Rs. {passMonthly.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                <p className="text-[10px] text-yellow-500/60">Fixed 30 days seat reservation</p>
              </div>
            </div>
            
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-500/20 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
              <div>
                <p className="text-xs text-emerald-700 dark:text-emerald-500 mb-1">Your Estimated Net Savings</p>
                <p className="text-xl font-bold text-emerald-800 dark:text-emerald-400">Save Rs. {savings.toLocaleString('en-US', {minimumFractionDigits: 2})} / month (25%)</p>
              </div>
              <button onClick={() => window.location.href='/auth'} className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-gray-900 font-bold px-6 py-2 rounded-lg transition-colors">
                Buy Pass
              </button>
            </div>
          </div>
        </div>
            </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-24 bg-gray-50 dark:bg-[#060913] border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest bg-blue-100 dark:bg-blue-900/30 px-3 py-1.5 rounded-full mb-4 inline-block border border-blue-200 dark:border-blue-800/50">Got Questions?</span>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600 dark:text-gray-400">Everything you need to know about the TapRide platform and ticketing system.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'How does the 60:40 seat allocation work?', a: 'Every 54-seat bus on our platform is dynamically split. 60% (30 seats) are locked exclusively for monthly season pass holders, ensuring daily commuters always have a guaranteed seat. The remaining 40% (20 seats) are opened up for daily spot travelers to book on a first-come, first-served basis.' },
              { q: 'What happens to my season pass on public holidays?', a: 'Our Auto-Booking Engine is synced with the official Sri Lankan mercantile holiday calendar. If a bus operator declares a holiday pause, your pass validity is automatically extended, so you never lose money on days the bus isn\'t running.' },
              { q: 'Do I need to print my ticket?', a: 'No! TapRide is completely paperless. Both Season Passes and Spot Tickets are issued as secure digital QR codes to your in-app wallet. Simply present the QR code on your phone to the conductor upon boarding for a sub-second scan.' },
              { q: 'Can I choose my specific seat number?', a: 'Yes. Season pass holders select their permanent fixed seat when purchasing their monthly subscription. Spot travelers can select any remaining open seat from the interactive 2+3 layout map when booking their daily ticket.' },
              { q: 'Is the platform available outside the North Central Province?', a: 'Currently, TapRide is exclusively piloted and operational for private bus fleets registered within the North Central Province (Anuradhapura and Polonnaruwa districts).' },
              { q: 'How do I pay for my tickets or season passes?', a: 'TapRide integrates directly with major Sri Lankan payment gateways. You can securely pay using Credit/Debit cards, LankaQR, eZ Cash, or mCash directly through the portal.' },
              { q: 'Can I cancel or reschedule a daily spot ticket?', a: 'Yes! Spot tickets can be canceled up to 2 hours before the scheduled departure time for a full refund to your TapRide wallet. Rescheduling is subject to seat availability on the new bus.' },
              { q: 'What if the bus breaks down or is canceled by the operator?', a: 'In the rare event of an operational cancellation, our Auto-Booking Engine will instantly notify you via SMS and automatically rebook you on the next available bus, or issue an immediate full refund.' }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white dark:bg-[#121622] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-4 sm:p-6 text-sm sm:text-base text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-gray-600 dark:text-gray-400 px-6 pb-6 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#0a0f1c] border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="TapRide Logo" className="w-10 h-10 rounded-xl shadow-sm" />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                TapRide
              </h1>
              <p className="text-[10px] text-gray-600 dark:text-gray-400 uppercase tracking-widest mt-0.5">Unified Mobility Portal</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
            <button onClick={() => window.location.href='/about'} className="hover:text-blue-600 dark:hover:text-white transition-colors">About Us</button>
            <button onClick={() => window.location.href='/legal/privacy'} className="hover:text-blue-600 dark:hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => window.location.href='/legal/terms'} className="hover:text-blue-600 dark:hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => window.location.href='/legal/refund'} className="hover:text-blue-600 dark:hover:text-white transition-colors">Refund Policy</button>
          </div>
          
          <div className="text-xs font-medium text-gray-500 dark:text-gray-500">
            &copy; 2026 TapRide System. OUSL Project.
          </div>
        </div>
      </footer>
    </div>
  );
}
