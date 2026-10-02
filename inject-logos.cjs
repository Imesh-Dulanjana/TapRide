const fs = require('fs');

// Fix ScheduleExplorer.tsx
let scheduleCode = fs.readFileSync('src/pages/ScheduleExplorer.tsx', 'utf8');
scheduleCode = scheduleCode.replace(
  /<div className="bg-blue-600 p-1\.5 rounded-lg">\s*<Map className="w-5 h-5 text-white" \/>\s*<\/div>/g,
  '<img src="/logo.png" alt="TapRide Logo" className="w-8 h-8 rounded-lg shadow-sm" />'
);
fs.writeFileSync('src/pages/ScheduleExplorer.tsx', scheduleCode);

// Fix AdminLogin.tsx
let adminLogin = fs.readFileSync('src/pages/AdminLogin.tsx', 'utf8');
adminLogin = adminLogin.replace(
  /<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-900\/50">\s*<Lock className="w-6 h-6 text-white" \/>\s*<\/div>/g,
  '<img src="/logo.png" alt="TapRide Logo" className="w-14 h-14 rounded-xl shadow-lg mx-auto mb-4" />'
);
fs.writeFileSync('src/pages/AdminLogin.tsx', adminLogin);

// Fix LandingPage.tsx Header
let landing = fs.readFileSync('src/pages/LandingPage.tsx', 'utf8');
landing = landing.replace(
  /<div className="bg-blue-600 p-2 rounded-xl">\s*<Bus className="w-6 h-6 text-white" \/>\s*<\/div>/g,
  '<img src="/logo.png" alt="TapRide Logo" className="w-10 h-10 rounded-xl shadow-sm" />'
);
fs.writeFileSync('src/pages/LandingPage.tsx', landing);

console.log('Fixed logos everywhere!');
