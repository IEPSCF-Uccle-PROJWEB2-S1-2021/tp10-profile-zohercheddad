module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'google', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'require-jsdoc': 'off',
  },
};
