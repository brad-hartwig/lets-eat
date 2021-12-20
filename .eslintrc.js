module.exports = {
    "env": {
        "browser": true,
        "amd": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // "react/react-in-jsx-scope": "off",
        // "react/jsx-uses-react": "off",
        // "react/jsx-no-undef": "off",
        // "no-extra-semi": "error"
    }
};
