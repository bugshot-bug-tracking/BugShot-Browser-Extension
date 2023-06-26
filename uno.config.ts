import {
	defineConfig,
	presetAttributify,
	presetTypography,
	presetUno,
} from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
	presets: [
		presetUno(),
		presetAttributify(),
		presetTypography(),
		presetRemToPx(),
	],
});
