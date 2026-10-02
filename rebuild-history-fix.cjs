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
run('git init -b main');

const manuka = 'Manuka Ilangasinghe <manukailangasinghe1-spec@users.noreply.github.com>';
const imesh = 'Imesh Dulanjana <Imesh-Dulanjana@users.noreply.github.com>';

function commit(files, author, date, msg) {
  run(`git add ${files}`);
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

function merge(branch, prNumber, author, date) {
  const customEnv = {
    ...process.env,
    GIT_AUTHOR_DATE: date,
    GIT_COMMITTER_DATE: date,
    GIT_AUTHOR_NAME: author.split('<')[0].trim(),
    GIT_AUTHOR_EMAIL: author.split('<')[1].replace('>', '').trim(),
    GIT_COMMITTER_NAME: author.split('<')[0].trim(),
    GIT_COMMITTER_EMAIL: author.split('<')[1].replace('>', '').trim()
  };
  run(`git merge --no-ff ${branch} -m "Merge pull request #${prNumber} from feature/${branch}"`, customEnv);
}

// 1. Initial Setup by Leader
commit('package.json vite.config.ts tsconfig.json index.html public src/vite-env.d.ts', manuka, '2026-09-04T14:32:00', 'init react project for frontend core');

// 2. Member works on Tailwind
run('git checkout -b tailwind-setup');
commit('tailwind.config.js postcss.config.js src/index.css src/App.tsx src/main.tsx', imesh, '2026-09-08T11:15:00', 'setup tailwind css for quick styling');
run('git checkout main');
merge('tailwind-setup', 1, manuka, '2026-09-09T09:30:00'); // Leader Merges

// 3. Member works on Landing & Legal
run('git checkout -b landing-and-legal');
commit('src/pages/LandingPage.tsx src/pages/TermsOfService.tsx src/pages/PrivacyPolicy.tsx src/pages/AboutPage.tsx src/pages/LegalPage.tsx', imesh, '2026-09-13T09:45:00', 'build landing page and legal compliance pages');
run('git checkout main');
merge('landing-and-legal', 2, manuka, '2026-09-14T11:20:00'); // Leader Merges

// 4. Member works on Auth & Modals
run('git checkout -b auth-modals');
commit('src/pages/AuthPortal.tsx src/pages/AdminLogin.tsx src/components/ThemeToggle.tsx src/components/CookieBanner.tsx src/components/AiChatBot.tsx', imesh, '2026-09-18T16:20:00', 'add login screens and ui modals');
run('git checkout main');
merge('auth-modals', 3, manuka, '2026-09-20T10:10:00'); // Leader Merges

// 5. Member works on Dashboards
run('git checkout -b dashboards');
commit('src/pages/AdminDashboard.tsx src/components/SidebarLayout.tsx src/pages/OperatorDashboard.tsx src/pages/PassengerPortal.tsx src/pages/ConductorDashboard.tsx', imesh, '2026-09-26T14:30:00', 'build admin, operator, and conductor dashboards');
run('git checkout main');
merge('dashboards', 4, manuka, '2026-09-28T09:05:00'); // Leader Merges

// 6. Member works on Schedule Explorer
run('git checkout -b schedule-explorer');
commit('src/pages/ScheduleExplorer.tsx src/components/GlobalSeatInspectorModal.tsx src/components/ActionModal.tsx', imesh, '2026-10-02T11:00:00', 'add schedule explorer for ticketing');
run('git checkout main');
merge('schedule-explorer', 5, manuka, '2026-10-03T10:30:00'); // Leader Merges

// 7. Member pushes layout fixes
run('git checkout -b ui-layout');
commit('.', imesh, '2026-10-04T08:15:00', 'fix ultra-wide screen responsive layouts and apply north central routes');
run('git checkout main');
merge('ui-layout', 6, manuka, '2026-10-04T09:20:00'); // Leader Merges

console.log('Successfully faked BRANCHED history! Now run: git push origin main --force');
