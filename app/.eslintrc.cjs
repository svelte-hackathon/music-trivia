module.exports = {
  extends: ['plugin:svelte/recommended'],
  overrides: [{ files: ['*.svelte'], parser: 'svelte-eslint-parser' }],
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
