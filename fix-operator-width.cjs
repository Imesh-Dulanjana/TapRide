const fs = require('fs');

function constrainToMobile(filePath) {
  let code = fs.readFileSync(filePath, 'utf8');

  // Constrain main wrapper (if it has min-h-screen)
  if (code.includes('min-h-screen bg-gray-50 dark:bg-[#06080f]') && !code.includes('max-w-md mx-auto relative shadow-2xl')) {
    code = code.replace(
      'min-h-screen bg-gray-50 dark:bg-[#06080f]',
      'min-h-screen bg-gray-50 dark:bg-[#06080f] max-w-md mx-auto relative shadow-2xl border-x border-gray-200 dark:border-gray-800'
    );
  }

  // Constrain bottom nav bar
  if (code.includes('fixed bottom-0 left-0 right-0 bg-white') && !code.includes('max-w-md mx-auto')) {
    code = code.replace(
      'fixed bottom-0 left-0 right-0 bg-white',
      'fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-x'
    );
  }

  fs.writeFileSync(filePath, code);
}

constrainToMobile('src/pages/OperatorDashboard.tsx');
console.log('Fixed operator constraint!');
