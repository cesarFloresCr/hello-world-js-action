const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require ("@rollup/plugin-node-resolve");

const config = {
  input: "src/index.js",
  output: {
    esModule: true,
    file: "dist/index.js",
    format: "es",
    sourcemap: true,
  },
  plugins: [commonjs(), nodeResolve({ preferBuiltins: true })],
};

module.exports = config
