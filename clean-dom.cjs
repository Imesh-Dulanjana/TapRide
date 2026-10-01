const fs = require('fs');

let content = fs.readFileSync('src/pages/OperatorDashboard.tsx', 'utf8');

// The file currently has injected corruption at lines 98-99:
// </div>
// <div className="w-full">
// {/* ACTIVE BUSES */}

// We need to remove the premature closing of the Today's overview grid.
content = content.replace(
  '                    </div>\n        <div className="w-full">\n        {/* ACTIVE BUSES */}',
  '        {/* ACTIVE BUSES */}'
);

// It also has double-injected grid wrappers above REVENUE:
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
//         <div className="w-full">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
//     <div className="w-full">
//     {/* REVENUE */}

content = content.replace(
  '        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">\n' +
  '        <div className="w-full">\n' +
  '        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">\n' +
  '    <div className="w-full">\n' +
  '    {/* REVENUE */}',
  '        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">\n' +
  '        <div className="w-full">\n' +
  '        {/* REVENUE */}'
);

// We need to ensure the bottom wrapper closes correctly.
// Let's check how many </div> are before QUICK ACTIONS
// It should be:
//                 </div>
//       </div>
//
//         {/* QUICK ACTIONS */}

fs.writeFileSync('src/pages/OperatorDashboard.tsx', content);
console.log('Cleaned up the corrupted DOM.');
