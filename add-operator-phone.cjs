const fs = require('fs');

let c = fs.readFileSync('src/pages/AuthPortal.tsx', 'utf8');

const replacement = `
            {authMode === 'register' && activeRole === 'operator' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">Fleet / Company Name</label>
                    <input 
                      type="text" pattern="^[^<>;%*()]+$" title="For security, special characters like < > ; % * are not allowed."
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-white dark:bg-[#0a0c14] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Superline Travels"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">Contact Number</label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white dark:bg-[#0a0c14] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="07X XXX XXXX"
                      required
                    />
                  </div>
                </div>`;

c = c.replace(
  /\{\s*authMode === 'register' && activeRole === 'operator' && \(\s*<>\s*<div>\s*<label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">Fleet \/ Company Name<\/label>\s*<input\s*type="text" pattern="\^\[\^<>;%\*\(\)\]\+\$" title="For security, special characters like < > ; % \* are not allowed\."\s*value=\{companyName\}\s*onChange=\{\(e\) => setCompanyName\(e\.target\.value\)\}\s*className="w-full bg-white dark:bg-\[#0a0c14\] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"\s*placeholder="Superline Travels"\s*required\s*\/>\s*<\/div>/m,
  replacement
);

fs.writeFileSync('src/pages/AuthPortal.tsx', c);
console.log("Added phone number to Operator registration");
