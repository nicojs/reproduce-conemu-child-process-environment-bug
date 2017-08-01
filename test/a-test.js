const execSync = require('child_process').execSync;

describe('the env', function () {

    it('should contain "npm_config_onload_script"', () => {
        const stdout = execSync('node exec-log-env.js').toString();
        console.log(stdout);
        if (stdout.indexOf('"npm_config_onload_script": "undefined"') !== -1) {
            throw new Error('"npm_config_onload_script": "undefined"!');
        }
    });
});