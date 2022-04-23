import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import livereload from 'rollup-plugin-livereload';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'client/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		vue({ css: false }),
		css({ output: 'bundle.css' }),
		nodeResolve(),
		replace({
			'process.env.NODE_ENV': JSON.stringify('production'),
			'preventAssignment': true
		}),
		!production && livereload('public'),
		production && terser()
	],
	watch: {
		clearScreen: false
	}
}
