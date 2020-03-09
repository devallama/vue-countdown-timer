const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.(js|mdx)'],
    addons: ['@storybook/addon-docs'],
    webpackFinal: config => ({
        ...config,
        resolve: {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
                '@': path.join(__dirname, '../src/')
            }
        },
        module: {
            rules: [
                ...config.module.rules,
                {
                    test: /\.scss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                prependData: `@import "@/theme/_defaultTheme.scss";`
                            }
                        }
                    ],
                }
            ]
        }
    })
};
