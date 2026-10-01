const fs = require('fs');

let conductor = fs.readFileSync('src/pages/ConductorDashboard.tsx', 'utf8');

conductor = conductor.replace(
  'max-w-md mx-auto relative shadow-2xl border-x border-gray-200 dark:border-gray-800',
  'max-w-5xl mx-auto relative shadow-2xl border-x border-gray-200 dark:border-gray-800'
);

conductor = conductor.replace(
  'max-w-md mx-auto bg-white dark:bg-[#131620] border-t border-x',
  'max-w-5xl mx-auto bg-white dark:bg-[#131620] border-t border-x'
);

conductor = conductor.replace(
  '<div className="grid grid-cols-2 gap-3">',
  '<div className="grid grid-cols-2 md:grid-cols-4 gap-4">'
);

// We won't try to side-by-side the Sync Queue and Recent Activity to avoid any DOM risk for now.
// Just inject extra data.

const moreActivity = `
          <ActivityItem type="digital" title="Digital Fare" subtitle="Passenger QR validated · Route 41" time="11:18 AM" amount="Rs. 52" status="COMPLETED" />
          <ActivityItem type="cash" title="Cash Ticket" subtitle="Manual fallback ticket · Stage 4" time="11:05 AM" amount="Rs. 45" status="RECORDED" />
          <ActivityItem type="digital" title="Digital Fare" subtitle="Season Pass scanned · Route 41" time="10:42 AM" amount="Rs. 0" status="COMPLETED" />
          <ActivityItem type="digital" title="Digital Fare" subtitle="Passenger QR validated · Route 41" time="10:38 AM" amount="Rs. 120" status="COMPLETED" />
          <ActivityItem type="cash" title="Cash Ticket" subtitle="Manual fallback ticket · Stage 2" time="10:15 AM" amount="Rs. 25" status="RECORDED" />
`;
conductor = conductor.replace(/<ActivityItem type="digital"[\s\S]*status="RECORDED" \/>/, moreActivity.trim());

// Geographic fixes
conductor = conductor.replace(/Route 138 · Colombo – Kaduwela/g, 'Route 41 · Anuradhapura – Polonnaruwa');
conductor = conductor.replace(/Direction · Kaduwela/g, 'Direction · Polonnaruwa');
conductor = conductor.replace(/Colombo <ChevronLeft className="w-3 h-3 rotate-180"\/> Kaduwela/g, 'Anuradhapura <ChevronLeft className="w-3 h-3 rotate-180"/> Polonnaruwa');

fs.writeFileSync('src/pages/ConductorDashboard.tsx', conductor);
console.log('Conductor dashboard transformed to pristine 5xl state!');
