const fs = require('fs');

// 1. Update SidebarLayout.tsx
let sidebar = fs.readFileSync('src/components/SidebarLayout.tsx', 'utf8');
sidebar = sidebar.replace(
  /<div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mr-3 shadow-md shadow-blue-600\/20">\s*T\s*<\/div>/g,
  '<img src="/logo.png" alt="TapRide Logo" className="w-10 h-10 rounded-xl shadow-sm mr-3" />'
);
fs.writeFileSync('src/components/SidebarLayout.tsx', sidebar);

// 2. Update AuthPortal.tsx (Desktop Logo)
let auth = fs.readFileSync('src/pages/AuthPortal.tsx', 'utf8');
auth = auth.replace(
  /<div className="w-10 h-10 bg-white\/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white">\s*<Bus className="w-6 h-6" \/>\s*<\/div>/g,
  '<img src="/logo.png" alt="TapRide Logo" className="w-10 h-10 rounded-xl shadow-sm" />'
);

// 3. Update AuthPortal.tsx (Mobile Logo)
auth = auth.replace(
  /<div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">\s*<Bus className="w-6 h-6" \/>\s*<\/div>/g,
  '<img src="/logo.png" alt="TapRide Logo" className="w-10 h-10 rounded-xl shadow-sm" />'
);

fs.writeFileSync('src/pages/AuthPortal.tsx', auth);
console.log('Successfully injected logo.png');
