const fs = require('fs');

let op = fs.readFileSync('src/pages/OperatorDashboard.tsx', 'utf8');

// 1. Fix constraints to max-w-5xl (what f3714e2 had)
op = op.replace('max-w-2xl mx-auto', 'max-w-5xl mx-auto'); // header
op = op.replace('<main className="max-w-md mx-auto mt-6">', '<main className="max-w-5xl mx-auto mt-6 px-4 md:px-8 space-y-8">'); 

// 2. Fix top grid (4 columns)
op = op.replace('<div className="grid grid-cols-2 gap-4">', '<div className="grid grid-cols-2 md:grid-cols-4 gap-4">');

// 3. Put Revenue and Active Buses side by side cleanly
let revenueIndex = op.indexOf('{/* REVENUE */}');
let activeBusesIndex = op.lastIndexOf('{/* ACTIVE BUSES */}'); // lastIndexOf avoids matching the small card
let quickActionsIndex = op.indexOf('{/* QUICK ACTIONS */}');

let beforeRevenue = op.substring(0, revenueIndex);
let revenueSection = op.substring(revenueIndex, activeBusesIndex);
let activeBusesSection = op.substring(activeBusesIndex, quickActionsIndex);
let afterQuickActions = op.substring(quickActionsIndex);

op = beforeRevenue +
     '<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">\n' +
     '  <div className="w-full">\n  ' + revenueSection + '  </div>\n' +
     '  <div className="w-full">\n  ' + activeBusesSection + '  </div>\n' +
     '</div>\n\n' +
     afterQuickActions;

// 4. Inject 6 buses instead of 3
const busesListStr = `[
              { plate: 'NB-4521', route: 'Route 41 · Anuradhapura → Polonnaruwa', pax: '186', status: 'ON ROUTE' },
              { plate: 'NB-7184', route: 'Route 87 · Kekirawa → Anuradhapura', pax: '142', status: 'ON ROUTE' },
              { plate: 'NB-3298', route: 'Route 52 · Medawachchiya → Mihintale', pax: '—', status: 'IDLE' },
              { plate: 'NB-8822', route: 'Route 41 · Polonnaruwa → Anuradhapura', pax: '115', status: 'ON ROUTE' },
              { plate: 'NB-1092', route: 'Route 87 · Anuradhapura → Kekirawa', pax: '92', status: 'ON ROUTE' },
              { plate: 'NB-5544', route: 'Route 48 · Habarana → Polonnaruwa', pax: '—', status: 'MAINTENANCE' },
            ]`;
op = op.replace(/\[\s*\{\s*plate: 'NB-4521'[\s\S]*status: 'IDLE' \},\s*\]/, busesListStr);

// 5. Expand Quick Actions to 6 buttons
const actionsListStr = `[
              { name: 'Fleet', icon: Square },
              { name: 'Crew', icon: MoreHorizontal },
              { name: 'Reports', icon: Menu },
              { name: 'Maintenance', icon: Activity },
              { name: 'Schedules', icon: Clock },
              { name: 'Alerts', icon: Bell }
            ]`;
op = op.replace(/\[\s*\{\s*name: 'Fleet'[\s\S]*name: 'Reports'[^\]]*\}\s*\]/, actionsListStr);
op = op.replace('<div className="grid grid-cols-3 gap-4">', '<div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">');

// 6. Make Revenue chart show 14 days
const daysArr = `['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S']`;
const heightsArr = `['h-10', 'h-16', 'h-14', 'h-20', 'h-16', 'h-28', 'h-16', 'h-12', 'h-14', 'h-24', 'h-18', 'h-22', 'h-32', 'h-20']`;
const isTodayLogic = `const isToday = day === 'S' && i === 13;`;

op = op.replace(/\{\['M', 'T', 'W', 'T', 'F', 'S', 'S'\].map\(\(day, i\) => \{/, '{' + daysArr + '.map((day, i) => {');
op = op.replace(/const heights = \['h-10'[^\]]*\];/, 'const heights = ' + heightsArr + ';');
op = op.replace(/const isToday = day === 'S' && i === 5;/, isTodayLogic);

fs.writeFileSync('src/pages/OperatorDashboard.tsx', op);
console.log('Fully transformed Operator Dashboard to pristine 5xl data state!');
