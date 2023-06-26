import { darkTheme, lightTheme, GlobalThemeOverrides } from "naive-ui";
import lightThemeOverrides from "~/config/lightThemeOverrides.json";

export function useTheme() {
	const theme_value = ref("light");

	const lightOverrides: GlobalThemeOverrides = lightThemeOverrides;

	const darkOverrides: GlobalThemeOverrides = {
		Layout: {
			color: "#1a2040",
			siderColor: "#1a2040",
			siderBorderColor: "#131730",
		},
	};

	const theme = computed(() => {
		switch (theme_value.value) {
			case "dark":
				return darkTheme;

			default:
			case "light":
				return lightTheme;
		}
	});

	const overrides = computed(() => {
		switch (theme_value.value) {
			case "dark":
				return darkOverrides;

			default:
			case "light":
				return lightOverrides;
		}
	});

	return { theme, overrides };
}
