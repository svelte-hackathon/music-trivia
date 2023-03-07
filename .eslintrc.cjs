module.exports = {
  root: true,
  extends: ['airbnb-base'],
  plugins: ['import'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  env: {
    node: true,
  },
};
