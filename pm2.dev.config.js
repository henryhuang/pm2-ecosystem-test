module.exports = {

    apps: [

        // First application
        {
            name: 'dev.one.com',
            script: 'index.js',
            env: {
                COMMON_VARIABLE: 'true',
                NODE_ENV: 'dev',
                PORT: 4000,
            }
        }

    ],

}