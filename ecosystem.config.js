module.exports = {
    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy: {
        production: {
            user: 'root',
            host: '192.168.99.100',
            ref: 'bb/master',
            repo: 'git@bitbucket.org:imluckyman/pm2-ecosystem-test.git',
            path: '/usr/local/share/www/www.one.com',
            'post-deploy': 'npm install && pm2 reload pm2.www.config.js --env production',
            env: {
                PORT: 3000,
            }
        },
        dev: {
            user: 'root',
            host: '192.168.99.100',
            ref: 'bb/dev',
            repo: 'git@bitbucket.org:imluckyman/pm2-ecosystem-test.git',
            path: '/usr/local/share/www/dev.one.com',
            'post-deploy': 'npm install && pm2 reload pm2.dev.config.js --env dev',
            env: {
                NODE_ENV: 'dev',
                PORT: 4000,
            }
        }
    }
};