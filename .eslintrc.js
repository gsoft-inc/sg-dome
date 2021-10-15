module.exports = {
    root: true,
    extends: [
        "@sharegate/eslint-config-recommended",
        "@sharegate/eslint-config-sort-imports",
        "@sharegate/eslint-config-react"
    ],
    parserOptions: {
        ecmaVersion: 2018,
        requireConfigFile : "false"
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    rules: {
        "linebreak-style": ["warn", "unix"],
        "prefer-const": ["warn", {
            "destructuring": "all"
        }],
        "no-param-reassign": "off",
        "react/jsx-sort-props": "error",
        "react/destructuring-assignment": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off"
    }
};
