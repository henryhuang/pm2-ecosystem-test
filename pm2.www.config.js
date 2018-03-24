module.exports = {

    apps: [

        // First application
        {
            name: 'www.one.com',
            script: 'index.js',
            env: {
                COMMON_VARIABLE: 'true'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }

    ],

}