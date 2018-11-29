
module.exports = {
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["react", "prettier"],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mongo": true,
    "jest": true,
    "commonjs": true,
    "prototypejs": true
  },
  "rules": {
    "max-len": ["warn", 80],
    "prettier/prettier": "error",
    "no-console": "off",
    "prefer-destructuring": "off",
    "import/extensions": [".js", ".jsx"],
    "no-undef": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": "off",
    "block-scoped-var": "off",
    "no-plusplus": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",

    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "react/destructuring-assignment": "off",
    "react/prop-types": 0,
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ]
  }
};