module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/semi': 'off',
    "@typescript-eslint/explicit-function-return-type": "off",
    "comma-dangle": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
          "multiline": {
              "delimiter": "semi",
              "requireLast": true
          },
          "singleline": {
              "delimiter": "semi",
              "requireLast": false
          }
      }
    ]
  },
};
