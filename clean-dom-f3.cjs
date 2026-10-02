const fs = require('fs');

let op = fs.readFileSync('src/pages/OperatorDashboard.tsx', 'utf8');

// The file currently has injected corruption at lines 98-99:
// </div>
// <div className="w-full">
// {/* ACTIVE BUSES */}

// We need to remove the premature closing of the Today's overview grid.
op = op.replace(
  '                    </div>\r\n        <div className="w-full">\r\n        {/* ACTIVE BUSES */}',
  '                    </div>\n        {/* ACTIVE BUSES */}'
);
op = op.replace(
  '                    </div>\n        <div className="w-full">\n        {/* ACTIVE BUSES */}',
  '                    </div>\n        {/* ACTIVE BUSES */}'
);

// It also has double-injected grid wrappers above REVENUE:
op = op.replace(
  '        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">\r\n        <div className="w-full">\r\n        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">\r\n  <div className="w-full">\r\n  {/* REVENUE */}',
  '        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">\n  <div className="w-full">\n  {/* REVENUE */}'
);
op = op.replace(
  '        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">\n        <div className="w-full">\n        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">\n  <div className="w-full">\n  {/* REVENUE */}',
  '        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">\n  <div className="w-full">\n  {/* REVENUE */}'
);

// Fix trailing tags
const badCluster1 = `          </div>
        </div>

                </div>
      </div>

          </div>
</div>

{/* QUICK ACTIONS */}`;

const badCluster2 = `          </div>\r
        </div>\r
\r
                </div>\r
      </div>\r
\r
          </div>\r
</div>\r
\r
{/* QUICK ACTIONS */}`;

const goodCluster = `          </div>
        </div>
      </div>
    </div>

{/* QUICK ACTIONS */}`;

op = op.replace(badCluster1, goodCluster);
op = op.replace(badCluster2, goodCluster);

fs.writeFileSync('src/pages/OperatorDashboard.tsx', op);
console.log('Cleaned up DOM correctly!');
