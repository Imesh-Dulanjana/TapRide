const fs = require('fs');
let op = fs.readFileSync('src/pages/OperatorDashboard.tsx', 'utf8');
op = op.replace('<main className="max-w-md mx-auto mt-6">', '<main className="max-w-6xl mx-auto mt-6 px-4 md:px-8">');
fs.writeFileSync('src/pages/OperatorDashboard.tsx', op);
console.log('Fixed Operator Dashboard max-width!');
