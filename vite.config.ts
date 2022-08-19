import { resolve } from "path";
import type { UserConfig } from "vite";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import Unocss from "unocss/vite";

const r = (...args: string[]) => resolve(__dirname, ...args);

export default defineConfig(() => {
	return {
		...sharedConfig,

		build: {
			outDir: r("extension/dev"),
			emptyOutDir: false,
			sourcemap: true,
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
			minify: false,
			// https://developer.chrome.com/docs/webstore/program_policies/#:~:text=Code%20Readability%20Requirements
			terserOptions: {
				mangle: false,
			},
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
			],
			dts: r("src/auto-imports.d.ts"),
		}),

		Components({
			dirs: [r("src/components")],
			// generate `components.d.ts` for ts support with Volar
			dts: r("src/components.d.ts"),
		}),

		// https://github.com/intlify/vite-plugin-vue-i18n
		VueI18n({
			include: [resolve(__dirname, "src/locales/**")],
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
