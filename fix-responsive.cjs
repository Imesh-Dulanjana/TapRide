const fs = require('fs');

// ConductorDashboard.tsx Responsive Fix
let conductor = fs.readFileSync('src/pages/ConductorDashboard.tsx', 'utf8');

conductor = conductor.replace(
  'max-w-md mx-auto relative shadow-2xl border-x border-gray-200 dark:border-gray-800',
  'max-w-6xl mx-auto relative shadow-2xl border-x border-gray-200 dark:border-gray-800'
);

conductor = conductor.replace(
  'max-w-md mx-auto bg-white dark:bg-[#131620] border-t border-x',
  'max-w-6xl mx-auto bg-white dark:bg-[#131620] border-t border-x'
);

conductor = conductor.replace(
  '<div className="grid grid-cols-2 gap-3">',
  '<div className="grid grid-cols-2 md:grid-cols-4 gap-4">'
);

// Group Sync Queue and Recent Activity in a 2-column grid on desktop
conductor = conductor.replace(
  '{/* Sync Queue */}',
  '<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">\n        <div className="w-full">\n      {/* Sync Queue */}'
);

conductor = conductor.replace(
  '{/* Recent Activity */}',
  '        </div>\n        <div className="w-full">\n      {/* Recent Activity */}'
);

// We need to close the two divs at the end of the DashboardView.
// Look for:
//        </div>
//      </div>
//    </div>
//  );
//}
conductor = conductor.replace(
  '        </div>\n      </div>\n    </div>\n  );\n}',
  '        </div>\n      </div>\n    </div>\n    </div>\n    </div>\n  );\n}'
);

fs.writeFileSync('src/pages/ConductorDashboard.tsx', conductor);


// OperatorDashboard.tsx Responsive Fix
let operator = fs.readFileSync('src/pages/OperatorDashboard.tsx', 'utf8');

operator = operator.replace(
  'max-w-md mx-auto relative shadow-2xl border-x border-gray-200 dark:border-gray-800',
  'max-w-6xl mx-auto relative shadow-2xl border-x border-gray-200 dark:border-gray-800'
);

operator = operator.replace(
  'fixed bottom-0 left-0 right-0 max-w-md mx-auto',
  'fixed bottom-0 left-0 right-0 max-w-6xl mx-auto'
);

operator = operator.replace(
  '<div className="grid grid-cols-2 gap-4">',
  '<div className="grid grid-cols-2 md:grid-cols-4 gap-4">'
);

operator = operator.replace(
  '<div className="grid grid-cols-3 gap-4">',
  '<div className="grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-8">'
);

operator = operator.replace(
  '{/* REVENUE */}',
  '<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">\n        <div className="w-full">\n        {/* REVENUE */}'
);

operator = operator.replace(
  '{/* ACTIVE BUSES */}',
  '        </div>\n        <div className="w-full">\n        {/* ACTIVE BUSES */}'
);

operator = operator.replace(
  '{/* QUICK ACTIONS */}',
  '        </div>\n      </div>\n\n        {/* QUICK ACTIONS */}'
);

fs.writeFileSync('src/pages/OperatorDashboard.tsx', operator);

console.log('Fixed responsiveness!');
