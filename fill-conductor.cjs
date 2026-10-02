const fs = require('fs');
let code = fs.readFileSync('src/pages/ConductorDashboard.tsx', 'utf8');

const moreActivity = `
          <ActivityItem type="digital" title="Digital Fare" subtitle="Passenger QR validated · Route 41" time="11:18 AM" amount="Rs. 52" status="COMPLETED" />
          <ActivityItem type="cash" title="Cash Ticket" subtitle="Manual fallback ticket · Stage 4" time="11:05 AM" amount="Rs. 45" status="RECORDED" />
          <ActivityItem type="digital" title="Digital Fare" subtitle="Season Pass scanned · Route 41" time="10:42 AM" amount="Rs. 0" status="COMPLETED" />
          <ActivityItem type="digital" title="Digital Fare" subtitle="Passenger QR validated · Route 41" time="10:38 AM" amount="Rs. 120" status="COMPLETED" />
          <ActivityItem type="cash" title="Cash Ticket" subtitle="Manual fallback ticket · Stage 2" time="10:15 AM" amount="Rs. 25" status="RECORDED" />
`;

// It currently has 2 ActivityItems in the code. I'll replace the block.
code = code.replace(/<ActivityItem type="digital"[\s\S]*status="RECORDED" \/>/, moreActivity.trim());

fs.writeFileSync('src/pages/ConductorDashboard.tsx', code);
console.log('Filled Conductor space!');
