import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import Vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import type { UserConfig } from "vite";
import { defineConfig } from "vite";
import { isDev, r, target } from "./scripts/utils";

export default defineConfig(({ mode }) => {
	return {
		...sharedConfig,

		build: {
			watch: isDev ? {} : undefined,
			outDir: r(`dist/${mode}/${target}`),
			emptyOutDir: false,
			sourcemap: isDev,
			rollupOptions: {
				input: {
					background: r("src/background"),
					"popup/index": r("src/popup/index.html"),
					// options: r("src/options/index.html"),
				},
				output: {
					entryFileNames: "[name].js",
				},
			},
			// https://developer.chrome.com/docs/webstore/program_policies/#:~:text=Code%20Readability%20Requirements
			minify: !isDev,
		},

		plugins: [...sharedConfig.plugins!],
	};
});

export const sharedConfig: UserConfig = {
	root: r("src"),

	resolve: {
		alias: {
			"~/": `${r("src")}/`,
		},
	},

	plugins: [
		Vue(),

		AutoImport({
			imports: [
				"vue",
				{
					"webextension-polyfill": [["*", "browser"]],
				},
				"vue-i18n",
			],
			dts: r("src/auto-imports.d.ts"),
		}),

		Components({
			dirs: [r("src/components")],
			// generate `components.d.ts` for ts support with Volar
			dts: r("src/components.d.ts"),
		}),

		VueI18nPlugin({
			/* options */
			// locale messages resource pre-compile option
			include: [resolve(__dirname, "locales/**")],
		}),

		Unocss(),

		// rewrite assets to use relative path
		{
			name: "assets-rewrite",
			enforce: "post",
			apply: "build",
			transformIndexHtml(html) {
				return html.replace(/"\/assets\//g, '"../assets/');
			},
		},
	],

	optimizeDeps: {
		include: ["vue", "@vueuse/core", "webextension-polyfill"],
		exclude: ["vue-demi"],
	},
};
