import autoprefixer from "autoprefixer";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

export default {
	input: "src/MyComponent",
	output: [
		{
			file: pkg.main,
			format: "cjs",
			sourcemap: true,
		},
		{
			file: pkg.module,
			format: "es",
			sourcemap: true,
		},
	],
	external: ["react", "prop-types"],
	plugins: [
		postcss({
			plugins: [autoprefixer],
		}),
		babel({
			exclude: "node_modules/**",
			externalHelpers: true,
		}),
	],
};
