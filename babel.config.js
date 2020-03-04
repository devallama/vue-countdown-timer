const envConfig = {
    useBuiltIns: 'entry',
    corejs: 3
};

const serverEnvConfig = {
    useBuiltIns: 'entry',
    corejs: 3,
    targets: {
        node: true
    }
};

module.exports = {
    presets: [['@babel/preset-env', envConfig], '@vue/babel-preset-app'],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-optional-chaining'
    ],
    env: {
        test: {
            plugins: [
                ['babel-plugin-webpack-alias']
            ]
        },
        node: {
            presets: [['@babel/preset-env', serverEnvConfig]]
        }
    }
};
