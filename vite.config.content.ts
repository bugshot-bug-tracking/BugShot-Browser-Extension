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

		css: {
			postcss: {
				plugins: [
					{
						postcssPlugin: "replace-root",
						Rule(rule) {
							if (rule.selector === ":root") {
								rule.selector = ":host";
							}
						},

						Declaration(decl) {
							if (decl.value && decl.value.includes("rem")) {
								decl.value = decl.value.replace(/(-?\d*\.?\d+)rem/g, (_, num) => {
									return `${num}em`;
								});
							}
						},
					},
				],
			},
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
					assetFileNames: (assetInfo) => {
						// Check if the asset is a CSS file and rename it
						if (assetInfo.names && assetInfo.names[0] && assetInfo.names[0].endsWith(".css")) {
							return "style.css"; // Custom name for the CSS file
						}
						// Default naming for other assets (e.g., images)
						return assetInfo.names?.[0] || "[name].[ext]";
					},
					extend: true,
					format: "iife",
				},
			},
			minify: !isDev,
		},

		plugins: [...sharedConfig.plugins!],
	};
});
