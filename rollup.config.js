import { spawn } from 'child_process';
import svelte from 'rollup-plugin-svelte';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import terser from '@rollup/plugin-terser';
import css from 'rollup-plugin-css-only';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import bundleFonts from 'rollup-plugin-bundle-fonts';
import preprocess from 'svelte-preprocess';
import commonjs from '@rollup/plugin-commonjs';
import { optimizeImports } from 'carbon-preprocess-svelte';
import { generateSW } from 'rollup-plugin-workbox';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = spawn('npm', ['run', 'start', '--', 'npm run dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default [
	{
		input: 'src/database/_worker.ts',
		output: {
			format: 'es',
			file: 'public/_worker.js'
		},
		plugins: [
			del({ targets: ['public/_worker.js', 'public/serviceworker.*'], runOnce: true}),
			typescript({tsconfig: 'src/database/tsconfig.json'}),
		],
		watch: {
			clearScreen: false
		}
	},
	{
	input: 'src/main.js',
	output: {
		sourcemap: !production,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		del({ targets: 'public/build/*', runOnce: true}),
		copy({
			targets: [
				{src: 'node_modules/jquery/dist/jquery.min.js', dest: 'public/build/jquery'},
			]
		}),

		optimizeImports(),

		svelte({
			preprocess: preprocess(),
		}),

		bundleFonts({fontTargetDir: "public/fonts", cssBundleDir: "public/build"}),

		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'bundle.css' }),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		typescript( { sourceMap: !production} ),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),
		
		generateSW({
				swDest: 'public/serviceworker.js',
				globDirectory: 'public/',
				globIgnores: [
					"_worker.js",
					"_routes.json",
					"**/*.{ts,map}",
					"iframe_test.html"
				],
				globPatterns: [
					"**/*.{js,css,html,py,json}",
					"**/*icon*.{svg,png,ico}",
					"images/desktop_screenshot.png",
					"pyodide/*",
					"logo_dark.svg",
					"print_logo.png",
					"mathquill/fonts/Symbola.woff2",
					"fonts/IBMPlexSans-Light-Latin1.woff2",
					"fonts/IBMPlexSans-Regular-Latin1.woff2",
					"fonts/IBMPlexSans-Regular-Greek.woff2",
					"fonts/IBMPlexSans-SemiBold-Latin1.woff2",
					"fonts/IBMPlexSans-SemiBoldItalic-Latin1.woff2",
					"fonts/IBMPlexSans-Italic-Latin1.woff2",
					"fonts/IBMPlexSans-Italic.woff2",
					"fonts/IBMPlexSans-Bold-Latin1.woff2",
					"fonts/IBMPlexSans-Regular-Pi.woff2"
				],
				navigateFallback: "index.html",
				navigateFallbackAllowlist: [/^\/[a-zA-Z0-9]{22}$/, /^\/temp-checkpoint-.*$/, /^\/open_file$/],
				maximumFileSizeToCacheInBytes: 40*1000**2,
				inlineWorkboxRuntime: true,
				sourcemap: !production,
				mode: production ? "production" : "dev"
			},
			function render({ swDest, count, size }) {
				console.log(`Service worker ${swDest} set to precache ${count} files totalling ${size/(1000**2)} MB.`)
			}
		),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),
	],
	watch: {
		clearScreen: false
	}
}];
