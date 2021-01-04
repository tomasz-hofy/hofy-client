module.exports = {
    '*.{ts,tsx}': [
        'eslint --fix',
        'prettier --write',
    ],
    '*.{js,md,json}': ['prettier --write'],
};
