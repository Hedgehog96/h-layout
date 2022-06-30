/*
 * @Description:
 * @Author: Hedgehog96
 * @Date: 2022-05-09 14:52:14
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-30 14:18:46
 */
// .eslintrc.js
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
        sourceType: "module", //Allowsfortheuseofimports
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    // "plugin:prettier/recommended",
    ],
    rules: {
        indent: ["error", 4],
        "vue/html-indent": ["error", 4],
    },
};
