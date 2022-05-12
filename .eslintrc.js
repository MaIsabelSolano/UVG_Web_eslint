module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    "indent":["error", 4],
    "semi":["error", "never"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "linebreak-style": ["error", "windows"],
    "react/jsx-indent": ["error", 4],
    "space-in-parens": ["error", "never"],
    "no-alert": "error",
    "react/jsx-indent-props": ["error", 4],
    "no-alert": "off",
    "no-else-return": "error",
    "react/jsx-one-expression-per-line": "off",
    "no-restricted-globals": "off",
    "react/prop-types": "off",
    "no-unused-expressions": "off",
    "no-else-return":"off",
    "react/jsx-wrap-multilines":"off",
    "react/function-component-definition":"off",
  },
};
