import { defineConfig } from "vite";
import packageJson from "./package.json";
import { isDev, r, target } from "./scripts/utils";
import { sharedConfig } from "./vite.config";

// bundling the content script using Vite
export default defineConfig(({ mode }) => {
	return {
		...sharedConfig,

		define: {
			"process.env.NODE_ENV": `"'${mode}'"`,
		},

		build: {
			watch: isDev ? {} : undefined,
			outDir: r(`dist/${mode}/${target}/content`),
			cssCodeSplit: false,
			emptyOutDir: false,
			sourcemap: isDev ? "inline" : false,
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
			minify: !isDev,
		},

		plugins: [...sharedConfig.plugins!],
	};
});
