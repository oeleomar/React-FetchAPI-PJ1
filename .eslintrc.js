module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 2,
    'react/react-in-jsx-scope': 'off',
    'react/state-in-constructor': 0,
    'react/prefer-stateless-function': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
  },
}
