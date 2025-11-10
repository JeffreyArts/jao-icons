import typescript from "@rollup/plugin-typescript"
import json from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"

export default {
    input: "src/index.ts",
    output: {
        file: "dist/bundle.js",
        format: "cjs",   // of 'esm'
    },
    plugins: [
        resolve(),       // voor node_modules
        json(),          // voor JSON imports
        typescript()     // voor TypeScript
    ],
}
