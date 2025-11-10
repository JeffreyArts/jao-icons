import typescript from "@rollup/plugin-typescript"
import json from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"

export default [
    // CommonJS build
    {
        input: "src/index.ts",
        output: {
            file: "dist/jao-icons.cjs.js",
            format: "cjs",
            exports: "named",
        },
        plugins: [
            resolve(),
            json(),
            typescript(),
        ],
    },
    // ESM build
    {
        input: "src/index.ts",
        output: {
            file: "dist/jao-icons.esm.js",
            format: "es",
        },
        plugins: [
            resolve(),
            json(),
            typescript(),
        ],
    },
]
