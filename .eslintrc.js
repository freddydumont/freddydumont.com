module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [`react-app`, 'plugin:jest/recommended'],
  plugins: ['react-hooks', 'jest'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  env: {
    'jest/globals': true,
  },
};
