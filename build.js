/* eslint-disable @typescript-eslint/no-var-requires */
const fsExtra = require('fs-extra');
const childProcess = require('child_process');

childProcess.execSync('vue-cli-service build', { stdio: 'inherit' });
childProcess.execSync('bash deploy.sh', { stdio: 'inherit' });

fsExtra.removeSync('./dist');
