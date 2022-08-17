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
});
