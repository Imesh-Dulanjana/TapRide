const fs = require('fs');
let code = fs.readFileSync('src/pages/ConductorDashboard.tsx', 'utf8');

// Fix main wrapper
code = code.replace(
  /className="min-h-screen bg-\[#f8f9fa\] dark:bg-\[#06080f\] pb-24 font-sans text-gray-900 dark:text-gray-100"/g,
  'className="min-h-screen bg-[#f8f9fa] dark:bg-[#06080f] pb-24 font-sans text-gray-900 dark:text-gray-100 max-w-md mx-auto relative shadow-2xl border-x border-gray-200 dark:border-gray-800"'
);

// Fix bottom nav bar
code = code.replace(
  /className="fixed bottom-0 left-0 right-0 bg-white dark:bg-\[#131620\] border-t border-gray-200 dark:border-gray-800 flex justify-around items-center py-2 px-2 z-50 pb-safe"/g,
  'className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white dark:bg-[#131620] border-t border-x border-gray-200 dark:border-gray-800 flex justify-around items-center py-2 px-2 z-50 pb-safe"'
);

fs.writeFileSync('src/pages/ConductorDashboard.tsx', code);
console.log('Fixed mobile constraint!');
