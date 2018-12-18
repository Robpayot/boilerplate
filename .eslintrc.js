module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
    },
    "extends": "eslint:recommended",
    "ecmaFeatures": { "modules": true },
    "parserOptions": {
        "sourceType": "module",
    },
    "rules": {
        "indent": [2, "tab", {
            "SwitchCase": 1
        }],
        "arrow-spacing": [2, { "before": true, "after": true }],
        "no-console": 0,
        "no-debugger": 0,
        "no-empty": [2, { "allowEmptyCatch": true }],
        "no-extra-parens": 2,
        "no-multi-spaces": 2,
        "no-spaced-func": 2,
        "no-trailing-spaces": 2,
        "no-var": 2,
        "prefer-template": 2,
        "prefer-arrow-callback": 2,
        "quotes": [2, "single"],
        "semi": [2, "never"]
    }
};