module.exports = {
    '*.{ts,tsx}': [
        'eslint --fix',
        'prettier --write',
        'git add',
    ],
    '*.{js,md,json}': [
        'prettier --write',
        'git add',
    ],
};
