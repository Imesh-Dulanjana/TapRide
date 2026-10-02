const fs = require('fs');

let op = fs.readFileSync('src/pages/OperatorDashboard.tsx', 'utf8');

// Fix constraints
op = op.replace('max-w-2xl mx-auto', 'max-w-7xl mx-auto'); // header
op = op.replace('<main className="max-w-md mx-auto mt-6">', '<main className="max-w-7xl mx-auto mt-6 px-4 md:px-8 space-y-8">'); // if bb1656d had max-w-md
op = op.replace('<main className="max-w-2xl mx-auto px-6 space-y-8">', '<main className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">'); // if 887d992 had max-w-2xl

// Fix grids
op = op.replace('<div className="grid grid-cols-2 gap-4">', '<div className="grid grid-cols-2 md:grid-cols-4 gap-4">');
op = op.replace('<div className="grid grid-cols-3 gap-4">', '<div className="grid grid-cols-3 gap-6 md:gap-8">');

// Group Revenue and Active Fleet properly
let revenueIndex = op.indexOf('{/* REVENUE */}');
let activeBusesIndex = op.lastIndexOf('{/* ACTIVE BUSES */}');
let quickActionsIndex = op.indexOf('{/* QUICK ACTIONS */}');

if (revenueIndex !== -1 && activeBusesIndex !== -1 && quickActionsIndex !== -1) {
  let beforeRevenue = op.substring(0, revenueIndex);
  let revenueSection = op.substring(revenueIndex, activeBusesIndex);
  let activeBusesSection = op.substring(activeBusesIndex, quickActionsIndex);
  let afterQuickActions = op.substring(quickActionsIndex);

  // Wrap the two sections in a 2-col grid
  op = beforeRevenue +
       '<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">\n' +
       '  <div className="w-full">\n  ' + revenueSection + '  </div>\n' +
       '  <div className="w-full">\n  ' + activeBusesSection + '  </div>\n' +
       '</div>\n\n' +
       afterQuickActions;
}

fs.writeFileSync('src/pages/OperatorDashboard.tsx', op);
console.log('Fixed Operator Dashboard cleanly!');
