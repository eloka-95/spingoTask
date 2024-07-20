module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error', { "endOfLine": "auto" }],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
