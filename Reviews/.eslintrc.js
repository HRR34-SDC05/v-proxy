module.exports = {
  extends: ['airbnb', 'plugin:jsx-a11y/recommended'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'implicit-arrow-linebreak': ['warn', 'beside'],
    'import/extensions': ['disabled'],
    'no-confusing-arrow': 'warn',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'object-curly-newline': ['error', { multiline: true }],
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: { '+': 'after', '&&': 'after', '||': 'after', '=': 'after' },
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }],
    'react/no-array-index-key': 'warn',
    'react/prop-types': 'off',
    'space-before-function-paren': ['error', 'never'],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.js', '**/*config.js', '*setupTests.js'] },
    ],
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['jsx-a11y'],
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
        mocha: true,
      },
    },
  ],
};
