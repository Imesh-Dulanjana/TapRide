const fs = require('fs');
let code = fs.readFileSync('src/pages/OperatorDashboard.tsx', 'utf8');

// 1. Add more mock buses to the Active Buses list
const moreBuses = `
              { plate: 'NB-4521', route: 'Route 41 · Anuradhapura → Polonnaruwa', pax: '186', status: 'ON ROUTE' },
              { plate: 'NB-7184', route: 'Route 87 · Kekirawa → Anuradhapura', pax: '142', status: 'ON ROUTE' },
              { plate: 'NB-3298', route: 'Route 52 · Medawachchiya → Mihintale', pax: '—', status: 'IDLE' },
              { plate: 'NB-8822', route: 'Route 41 · Polonnaruwa → Anuradhapura', pax: '115', status: 'ON ROUTE' },
              { plate: 'NB-1092', route: 'Route 87 · Anuradhapura → Kekirawa', pax: '92', status: 'ON ROUTE' },
              { plate: 'NB-5544', route: 'Route 48 · Habarana → Polonnaruwa', pax: '—', status: 'MAINTENANCE' },
`;
code = code.replace(/\{\s*plate: 'NB-4521'[\s\S]*status: 'IDLE'\s*\},/, moreBuses.trim());

// 2. Expand Quick Actions from 3 to 6 buttons
const moreActions = `[
              { name: 'Fleet', icon: Square },
              { name: 'Crew', icon: MoreHorizontal },
              { name: 'Reports', icon: Menu },
              { name: 'Maintenance', icon: Activity },
              { name: 'Schedules', icon: Clock },
              { name: 'Alerts', icon: Bell }
            ]`;
code = code.replace(/\[\s*\{\s*name: 'Fleet'[\s\S]*name: 'Reports'[^\]]*\}\s*\]/, moreActions);
code = code.replace('grid-cols-3 md:grid-cols-3', 'grid-cols-3 md:grid-cols-6');

// 3. Make the Revenue chart wider/denser by showing 14 days instead of 7
const daysArr = `['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S']`;
const heightsArr = `['h-10', 'h-16', 'h-14', 'h-20', 'h-16', 'h-28', 'h-16', 'h-12', 'h-14', 'h-24', 'h-18', 'h-22', 'h-32', 'h-20']`;
const isTodayLogic = `const isToday = day === 'S' && i === 13;`;

code = code.replace(/\{\['M', 'T', 'W', 'T', 'F', 'S', 'S'\].map\(\(day, i\) => \{/, '{' + daysArr + '.map((day, i) => {');
code = code.replace(/const heights = \['h-10'[^\]]*\];/, 'const heights = ' + heightsArr + ';');
code = code.replace(/const isToday = day === 'S' && i === 5;/, isTodayLogic);

fs.writeFileSync('src/pages/OperatorDashboard.tsx', code);
console.log('Filled empty space with data!');
