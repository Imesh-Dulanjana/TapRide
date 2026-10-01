const fs = require('fs');

let op = fs.readFileSync('src/pages/OperatorDashboard.tsx', 'utf8');

// The file has THIS exact string at line 133:
/*
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
        <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
    <div className="w-full">
    {/* REVENUE *}
*/

// Let's just fix it using a simpler regex.
// Find `{/* REVENUE */}` and the nested grids right before it.

op = op.replace(
  /        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">\r?\n        <div className="w-full">\r?\n        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">\r?\n    <div className="w-full">\r?\n    \{\/\* REVENUE \*\/\}/g,
  '        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">\n        <div className="w-full">\n    {/* REVENUE */}'
);

// We also need to fix the first Active buses injection:
/*
                    </div>
        <div className="w-full">
        {/* ACTIVE BUSES *}
*/
op = op.replace(
  /                    <\/div>\r?\n        <div className="w-full">\r?\n        \{\/\* ACTIVE BUSES \*\/\}/g,
  '                    </div>\n        {/* ACTIVE BUSES */}'
);

// We also need to fix the cluster of closing tags before {/* QUICK ACTIONS */}
/*
          </div>
        </div>

                </div>
      </div>

          </div>
</div>

{/* QUICK ACTIONS */}
*/
op = op.replace(
  /          <\/div>\r?\n        <\/div>\r?\n\r?\n                <\/div>\r?\n      <\/div>\r?\n\r?\n          <\/div>\r?\n<\/div>\r?\n\r?\n\{\/\* QUICK ACTIONS \*\/\}/g,
  '          </div>\n        </div>\n      </div>\n    </div>\n\n{/* QUICK ACTIONS */}'
);

fs.writeFileSync('src/pages/OperatorDashboard.tsx', op);
console.log('Fixed Operator Dashboard using regex');
