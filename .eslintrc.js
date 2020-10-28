module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'prettier/vue',
    'eslint:recommended',
    'prettier/@typescript-eslint', // add prettier rules to eslint
    'plugin:prettier/recommended', // add the plugin that integrates eslint with prettier
    'plugin:vue/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/html-indent': 'off',
    'no-undef': 'off',
  },
};
