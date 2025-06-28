/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["eslint:recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module"
  },
  env: {
    node: true,
    es6: true
  },
  ignorePatterns: ["dist/**"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "no-console": "off"
  }
};