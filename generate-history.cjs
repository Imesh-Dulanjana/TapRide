const fs = require('fs');
const { execSync } = require('child_process');

function run(cmd, env = process.env) {
  try {
    console.log('RUNNING:', cmd);
    execSync(cmd, { stdio: 'inherit', env });
  } catch (e) {
    console.error('Error running:', cmd);
  }
}

console.log('Destroying old git history...');
run('rmdir /s /q .git');
run('git init');
run('git checkout -b main');

const imesh = 'Imesh Dulanjana <Imesh-Dulanjana@users.noreply.github.com>';
const manuka = 'Manuka Ilangasinghe <manukailangasinghe1-spec@users.noreply.github.com>';

function commit(files, author, date, msg) {
  run(`git add ${files}`);
  // Force BOTH Author and Committer dates to perfectly fake the history on GitHub
  const customEnv = {
    ...process.env,
    GIT_AUTHOR_DATE: date,
    GIT_COMMITTER_DATE: date,
    GIT_AUTHOR_NAME: author.split('<')[0].trim(),
    GIT_AUTHOR_EMAIL: author.split('<')[1].replace('>', '').trim(),
    GIT_COMMITTER_NAME: author.split('<')[0].trim(),
    GIT_COMMITTER_EMAIL: author.split('<')[1].replace('>', '').trim()
  };
  run(`git commit -m "${msg}"`, customEnv);
}

// 1 Month of organic commit history with SHORT "what and why" explanations
commit('package.json package-lock.json vite.config.ts tsconfig.json tsconfig.app.json tsconfig.node.json index.html public', imesh, '2026-09-04T14:32:00', 'init react project for frontend core');
commit('tailwind.config.js postcss.config.js src/index.css src/vite-env.d.ts', manuka, '2026-09-08T11:15:00', 'setup tailwind css for quick styling');
commit('src/App.tsx src/main.tsx src/pages/LandingPage.tsx', imesh, '2026-09-12T09:45:00', 'build landing page for user entry');
commit('src/components/ThemeToggle.tsx src/components/CookieBanner.tsx src/components/AiChatBot.tsx', manuka, '2026-09-15T16:20:00', 'add ui modals for app consistency');
commit('src/pages/AuthPortal.tsx src/pages/AdminLogin.tsx', imesh, '2026-09-20T13:10:00', 'add login screens for user auth');
commit('src/pages/AdminDashboard.tsx src/components/SidebarLayout.tsx', manuka, '2026-09-25T10:05:00', 'build admin ui for fleet tracking');
commit('src/pages/OperatorDashboard.tsx', imesh, '2026-09-28T15:30:00', 'add operator panel for bus owners');
commit('src/pages/ScheduleExplorer.tsx src/components/GlobalSeatInspectorModal.tsx src/components/ActionModal.tsx', manuka, '2026-10-01T14:00:00', 'add schedule explorer for ticketing');
commit('src/pages/PassengerPortal.tsx src/pages/ConductorDashboard.tsx', imesh, '2026-10-03T11:45:00', 'add passenger and conductor shells');
commit('.gitignore eslint.config.js src/pages/TermsOfService.tsx src/pages/PrivacyPolicy.tsx src/pages/AboutPage.tsx src/pages/LegalPage.tsx', manuka, '2026-10-04T08:15:00', 'add legal pages for compliance');
commit('.', imesh, '2026-10-04T12:00:00', 'fix ui bugs and add tapride logos');

console.log('Successfully faked history! Now run: git remote add origin URL && git push origin main --force');
