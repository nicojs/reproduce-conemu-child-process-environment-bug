const execSync = require('child_process').execSync;

execSync('node log-env.js', { stdio: [0, 1, 2]});