module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        jsx: true,
        useJSXTextNode: true,
    },
    extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
    plugins: ['@typescript-eslint', 'react-hooks'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};
