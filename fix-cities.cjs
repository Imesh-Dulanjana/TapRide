const fs = require('fs');

// Fix ConductorDashboard.tsx
let conductor = fs.readFileSync('src/pages/ConductorDashboard.tsx', 'utf8');
conductor = conductor.replace(/Route 138 · Colombo – Kaduwela/g, 'Route 41 · Anuradhapura – Polonnaruwa');
conductor = conductor.replace(/Direction · Kaduwela/g, 'Direction · Polonnaruwa');
conductor = conductor.replace(/Colombo <ChevronLeft className="w-3 h-3 rotate-180"\/> Kaduwela/g, 'Anuradhapura <ChevronLeft className="w-3 h-3 rotate-180"/> Polonnaruwa');
fs.writeFileSync('src/pages/ConductorDashboard.tsx', conductor);

// Fix OperatorDashboard.tsx
let operator = fs.readFileSync('src/pages/OperatorDashboard.tsx', 'utf8');
operator = operator.replace(/Route 138 · Colombo → Kaduwela/g, 'Route 41 · Anuradhapura → Polonnaruwa');
operator = operator.replace(/Route 100 · Panadura → Colombo/g, 'Route 87 · Kekirawa → Anuradhapura');
operator = operator.replace(/Route 120 · Horana → Colombo/g, 'Route 52 · Medawachchiya → Mihintale');
fs.writeFileSync('src/pages/OperatorDashboard.tsx', operator);

console.log('Fixed geographical locations!');
