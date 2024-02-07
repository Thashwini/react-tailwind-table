import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import terser from '@rollup/plugin-terser';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        extensions: ['.css'],
        extract: true,
        modules: true,
        config: { 
          path: './postcss.config.js'
        },
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser()
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.tsx",
    output: [{ file: packageJson.types, format: "es" }],
    plugins: [dts.default()],
  }
];
