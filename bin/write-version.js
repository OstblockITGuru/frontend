const fs = require('fs');
const { execSync } = require('child_process');
const packageJson = require('../package.json');

const version = packageJson.version;
let git_commit = 'unknown';
const sourceCommit = process.env.KCAPP_GIT_COMMIT;

if (sourceCommit && sourceCommit !== 'unverified') {
  if (!/^[0-9a-f]{40}$/.test(sourceCommit)) {
    throw new Error('KCAPP_GIT_COMMIT must be a full lowercase Git SHA-1');
  }
  git_commit = sourceCommit.slice(0, 7);
} else if (!sourceCommit) {
  try {
    git_commit = execSync('git rev-parse --short HEAD').toString().trim();
  } catch (e) {
    console.error('Could not get git commit hash', e);
  }
}

const versionInfo = { version, git_commit };
fs.writeFileSync('./version.json', JSON.stringify(versionInfo, null, 2));
