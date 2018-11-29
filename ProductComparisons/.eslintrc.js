module.exports = {
  'extends': ['airbnb', "prettier", "prettier/react"],
  'parser': 'babel-eslint',
  "plugins": ["prettier"],
  "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true,
        "mongo": true,
        "commonjs": true,
        "prototypejs": true
  },
  'rules': {
    "prettier/prettier": "error",
    'class-methods-use-this': ['error', { 'exceptMethods': ['getCurrentItem', 'getTentData', 'getShirtData'] }],
    'no-console': 'off',
    'no-restricted-globals': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off'
  }
};