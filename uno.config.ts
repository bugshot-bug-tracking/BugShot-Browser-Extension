import {
	defineConfig,
	presetAttributify,
	presetTypography,
	presetUno,
	presetWebFonts,
} from "unocss";

export default defineConfig({
	presets: [
		presetUno(),
		presetAttributify(),
		presetTypography(),
		presetWebFonts({
			fonts: {
				sans: "DM Sans",
				serif: "DM Serif Display",
				mono: "DM Mono",
			},
		}),
	],
	rules: [
		[/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}em` })],
		[/^p-(\d+)$/, (match) => ({ padding: `${match[1] / 4}em` })],
		[/^text-(\d+)$/, (match) => ({ "font-size": `${match[1] / 4}em` })],
	],
});
