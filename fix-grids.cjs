const fs = require('fs');
let s = fs.readFileSync('src/pages/ScheduleExplorer.tsx', 'utf8');

// fix form grid
s = s.replace(
  '<div className="grid grid-cols-4 gap-4">',
  '<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">'
);
// fix stats grid
s = s.replace(
  '<div className="grid grid-cols-4 gap-4">',
  '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">'
);
// fix the route line px-8
s = s.replace(
  '<div className="flex-1 px-8 relative flex flex-col items-center">',
  '<div className="flex-1 px-2 sm:px-8 relative flex flex-col items-center">'
);
fs.writeFileSync('src/pages/ScheduleExplorer.tsx', s);

let a = fs.readFileSync('src/pages/AdminDashboard.tsx', 'utf8');
a = a.replace(
  '<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">',
  '<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">'
);
fs.writeFileSync('src/pages/AdminDashboard.tsx', a);

console.log('Fixed grids');
