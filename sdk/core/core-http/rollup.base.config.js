import path from "path";
import nodeResolve from "@rollup/plugin-node-resolve";
import multiEntry from "@rollup/plugin-multi-entry";
import cjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import sourcemaps from "rollup-plugin-sourcemaps";
import viz from "rollup-plugin-visualizer";

const pkg = require("./package.json");
const depNames = Object.keys(pkg.dependencies);
const devDepNames = Object.keys(pkg.devDependencies);
const input = "./es/lib/coreHttp.js";
const production = process.env.NODE_ENV === "production";

export function nodeConfig(test = false) {
  const externalNodeBuiltins = ["http", "https", "util", "os", "stream", "crypto"];
  const baseConfig = {
    input: input,
    external: depNames.concat(externalNodeBuiltins),
    output: { file: "./dist/coreHttp.node.js", format: "cjs", sourcemap: true },
    preserveSymlinks: false,
    plugins: [
      sourcemaps(),
      replace({
        delimiters: ["", ""],
        values: {
          // replace dynamic checks with if (true) since this is for node only.
          // Allows rollup's dead code elimination to be more aggressive.
          "if (isNode)": "if (true)"
        }
      }),
      nodeResolve({ preferBuiltins: true }),
      cjs()
    ]
  };

  if (test) {
    // Entry points - test files under the `test` folder(common for both browser and node), node specific test files
    baseConfig.input = ["es/test/**/*[^browser.].js"];
    baseConfig.plugins.unshift(multiEntry({ exports: false }));

    // different output file
    baseConfig.output.file = "dist-test/coreHttp.node.test.js";

    // mark devdeps as external
    baseConfig.external.push(...devDepNames);

    // Disable tree-shaking of test code.  In rollup-plugin-node-resolve@5.0.0, rollup started respecting
    // the "sideEffects" field in package.json.  Since our package.json sets "sideEffects=false", this also
    // applies to test code, which causes all tests to be removed by tree-shaking.
    baseConfig.treeshake = false;
  } else if (production) {
    baseConfig.plugins.push(terser());
  }

  return baseConfig;
}

export function browserConfig(test = false, production = false) {
  const baseConfig = {
    input: input,
    external: [],
    output: {
      file: "./dist/coreHttp.browser.js",
      format: "umd",
      name: "Azure.Core.HTTP",
      sourcemap: true
    },
    preserveSymlinks: false,
    plugins: [
      sourcemaps(),
      replace({
        delimiters: ["", ""],
        values: {
          // replace dynamic checks with if (false) since this is for
          // browser only. Rollup's dead code elimination will remove
          // any code guarded by if (isNode) { ... }
          "if (isNode)": "if (false)"
        }
      }),
      nodeResolve({
        mainFields: ["module", "browser"],
        preferBuiltins: false
      }),
      cjs({
        namedExports: {
          chai: ["assert", "AssertionError", "should"],
          events: ["EventEmitter"],
          "@opentelemetry/types": ["CanonicalCode", "SpanKind", "TraceFlags"]
        }
      }),
      viz({ filename: "browser/browser-stats.html", sourcemap: false })
    ]
  };

  if (test) {
    // Entry points - test files under the `test` folder(common for both browser and node), browser specific test files
    baseConfig.input = ["es/test/**/*[^node.].js"];
    baseConfig.plugins.unshift(multiEntry({ exports: false }));
    baseConfig.output.file = "dist-test/coreHttp.browser.test.js";
    baseConfig.external.push("fetch-mock");

    baseConfig.onwarn = (warning) => {
      if (
        warning.code === "CIRCULAR_DEPENDENCY" &&
        warning.importer.indexOf(path.normalize("node_modules/chai/lib") === 0)
      ) {
        // Chai contains circular references, but they are not fatal and can be ignored.
        return;
      }

      console.error(`(!) ${warning.message}`);
    };

    // Disable tree-shaking of test code.  In rollup-plugin-node-resolve@5.0.0, rollup started respecting
    // the "sideEffects" field in package.json.  Since our package.json sets "sideEffects=false", this also
    // applies to test code, which causes all tests to be removed by tree-shaking.
    baseConfig.treeshake = false;
  } else if (production) {
    baseConfig.output.file = "./dist/coreHttp.browser.min.js";
    baseConfig.plugins.push(terser());
  }

  return baseConfig;
}
