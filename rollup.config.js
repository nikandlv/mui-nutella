import multiInput from "rollup-plugin-multi-input";
import autoprefixer from "autoprefixer";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

export default {
	input: ["src/*.js"],
	output: [
		{
			dir: "lib",
			format: "es",
			sourcemap: true,
		},
		{
			dir: "lib/cjs",
			format: "cjs",
			sourcemap: true,
		},
	],
	external: ["react", "prop-types"],
	plugins: [
		multiInput(),
		postcss({
			plugins: [autoprefixer],
		}),
		babel({
			exclude: "node_modules/**",
			externalHelpers: true,
		}),
	],
};
