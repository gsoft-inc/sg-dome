module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es5: true,
        es6: true,
        node: true
    },
    extends: [
        "@sharegate/eslint-config-recommended",
        "@sharegate/eslint-config-sort-imports",
        "@sharegate/eslint-config-react",
        "@sharegate/eslint-config-typescript"
    ],
    parserOptions: {
        ecmaVersion: 2018
    },
    plugins: ["sort-destructure-keys", "sort-keys-fix", "typescript-sort-keys"],
    rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "linebreak-style": ["warn", "unix"],
        "no-param-reassign": "off",
        "prefer-const": ["warn", {
            "destructuring": "all"
        }],
        "react/destructuring-assignment": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
        "react/jsx-sort-props": "error",
        "sort-destructure-keys/sort-destructure-keys": "error",
        "sort-keys-fix/sort-keys-fix": ["error", "asc", { natural: true }],
        "typescript-sort-keys/interface": ["error", "asc", { natural: true }]
    }
};
