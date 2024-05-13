module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/jsx-runtime",
    ],

    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",

    },
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    settings: {react: { version: "18.2" } },
    plugins: [
       "react-refresh"
    ],
    rules: {
        "react/jsx-no-target-blank": "off",
        'react-refresh/only-export-components': [
            "warn",
            { allowConstantExport: true },
        ],
        "react/prop-types": 0
    },

}

// Разобраться

// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:@typescript-eslint/recommended",
//         "plugin:react/recommended"
//     ],
//     "overrides": [
//         {
//             "env": {
//                 "node": true
//             },
//             "files": [
//                 ".eslintrc.{js,cjs}"
//             ],
//             "parserOptions": {
//                 "sourceType": "script"
//             }
//         }
//     ],
//     "parser": "@typescript-eslint/parser",
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "@typescript-eslint",
//         "react"
//     ],
//     "rules": {
//     }
// }


