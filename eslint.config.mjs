import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"


export default [
    {files: ["src/**/*.{js,mjs,cjs,ts}", "types/**/*.d.ts"]},
    {languageOptions: { globals: {...globals.browser, ...globals.node} }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            "indent": [
                "error",
                4
            ],
            "quotes": [
                "error",
                "double"
            ],
            "semi": [
                "error",
                "never"
            ],
            "linebreak-style": [
                "error",
                "unix"
            ],
        }
    }
]