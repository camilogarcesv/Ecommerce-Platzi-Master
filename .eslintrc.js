module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'no-console': 0,
    'import/prefer-default-export': 0,
  },
};
