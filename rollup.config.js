import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "index.ts",
    plugins: [typescript(), terser()],
    output: [
      {
        file: "dist/bundle.es.js",
        format: "es",
        name: "Helper",
      },
      {
        file: "dist/bundle.umd.js",
        format: "umd",
        name: "Helper",
      },
    ],
  },
];
