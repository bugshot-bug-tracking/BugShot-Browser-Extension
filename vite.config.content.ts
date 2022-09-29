import { defineConfig } from "vite";
import { sharedConfig } from "./vite.config";
import { r } from "./scripts/utils";
import packageJson from "./package.json";

// bundling the content script using Vite
export default defineConfig({
	...sharedConfig,

	define: {
		"process.env.NODE_ENV": "'development'",
	},

	build: {
		watch: {},
		outDir: r("extension/dev/content"),
		cssCodeSplit: false,
		emptyOutDir: false,
		sourcemap: "inline",
		lib: {
			entry: r("src/content/index.ts"),
			name: packageJson.name,
			formats: ["iife"],
		},
		rollupOptions: {
			output: {
				entryFileNames: "[name].js",
				extend: true,
				format: "iife",
			},
		},
		minify: false,
	},

	plugins: [...sharedConfig.plugins!],
});
