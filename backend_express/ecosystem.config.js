module.exports = {
    apps: [
        {
            name: 'API Tech Forum',
            script: './src/index.js',
            env: {
                NODE_ENV: 'production',
                PORT: 4001,
            },
        },
    ],
};
