const fs = require('fs');

let c = fs.readFileSync('src/pages/PassengerPortal.tsx', 'utf8');

c = c.replace(
  /<div className="p-8">\s*\{\/\* Bus Front UI \*\/}/,
  '<div className="p-4 sm:p-8 overflow-x-auto">\n              <div className="min-w-[320px]">\n              {/* Bus Front UI */}'
);

c = c.replace(
  /\{\/\* Grid of Seats \*\/\}\s*<div className="overflow-x-auto pb-2">/,
  '{/* Grid of Seats */}\n              <div className="pb-2">'
);

// We need to close the extra <div className="min-w-[320px]"> we added.
// It should be closed right before the "60% / 40% Pool" div wrapper.
c = c.replace(
  /<\/div>\s*<\/div>\s*<\/div>\s*<div className="p-4 border-t/,
  '</div>\n                </div>\n              </div>\n            </div>\n\n            <div className="p-4 border-t'
);


fs.writeFileSync('src/pages/PassengerPortal.tsx', c);
console.log('Fixed scroll wrapper');
