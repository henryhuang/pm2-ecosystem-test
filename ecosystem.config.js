module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [

        // First application
        {
            name: 'one.com',
            script: 'index.js',
            env: {
                COMMON_VARIABLE: 'true'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }

    ],

    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy: {
        production: {
            user: 'root',
            host: '192.168.99.100',
            ref: 'origin/master',
            repo: 'git@github.com:henryhuang/pm2-ecosystem-test.git',
            path: '/usr/local/share/www/www.one.com',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
        },
        dev: {
            user: 'root',
            host: '192.168.99.100',
            ref: 'dev',
            repo: 'git@github.com:henryhuang/pm2-ecosystem-test.git',
            path: '/usr/local/share/www/dev.one.com',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env dev',
            env: {
                NODE_ENV: 'dev'
            }
        }
    }
};