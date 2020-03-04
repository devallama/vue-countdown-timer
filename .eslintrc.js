
/* 
    Eslint rule levels:
        0 : off
        1 : warn
        2 : error
*/

module.exports = {
    plugins: ['babel'],
    extends: [
        'eslint:recommended',
        'stylelint',
        'plugin:vue/recommended'
    ],
    env: {
        browser: true,
        node: true,
        jest: true,
        mocha: true,
        es6: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
        'arrow-body-style': [2, 'as-needed'],
        'arrow-parens': [2, 'as-needed'],
        'babel/no-invalid-this': 1,
        'babel/valid-typeof': 2,
        'brace-style': [2, '1tbs', { 
            'allowSingleLine': true 
        }],
        'comma-dangle': [2, 'never'],
        'comma-spacing': 2,
        'eslint-comments/disable-enable-pair': 0,
        'eqeqeq': [2, 'smart'],
        'indent': [2, 4, {
            'SwitchCase': 1,
            'ignoredNodes': ['TemplateLiteral > *']
        }],
        'jsx-quotes': [2, 'prefer-double'],
        'keyword-spacing': [2, {
            'before': true
        }],
        'lines-between-class-members': [2, 'always', {
            'exceptAfterSingleLine': true
        }],
        'max-len': [2, {
            'code': 120, 
            'ignoreComments': true, 
            'ignoreStrings': true, 
            'ignoreTemplateLiterals': true 
        }],
        'multiline-ternary': 0,
        'no-async-promise-executor': 2,
        'no-debugger': 0,
        'no-alert': 2,
        'no-console': [1, {
            'allow': ['error', 'info', 'warn'],
        }],
        'no-prototype-builtins': 0,
        'no-unused-expressions': [2, { 
            'allowTernary': true, 
            'allowShortCircuit': true 
        }],
        'node/no-unpublished-require': 0,
        'node/no-unsupported-features/es-syntax': 0,
        'object-curly-spacing': [2, 'always'],
        'quotes': [2, 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true
        }],
        'semi': [2, 'always'],
        'vue/html-indent': [2, 4]
    },
    overrides: [{
        files: '**/*test*.js',
        rules: {
            'node/no-unpublished-require': 0,
            'node/no-missing-require': 0,
            'jest/valid-expect': 0
        }
    }]
};
