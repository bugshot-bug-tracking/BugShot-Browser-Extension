import { defineStore } from "pinia";
import { onMessage, sendMessage } from "webext-bridge";
import { position, locale, markers } from "~/logic/contentStorage";
import { Position, SettingsState, Theme } from "~/models/settings-store";
import { useI18nStore } from "./i18n";

export const useSettingsStore = defineStore("settings", {
	state: () => ({
		sidebar: true, // instance dependent
		position: position, // page local storage
		locale: locale, // global setting
		theme: Theme.Light, // global setting
		markers: markers,
	}),

	actions: {
		async init() {
			let locale = (await sendMessage(
				"background-get-locale",
				{}
			)) as string;

			let theme = (await sendMessage(
				"background-get-theme",
				{}
			)) as Theme;

			this.theme = theme;
			this.locale = locale;

			useI18nStore().setLocale(this.locale);
		},

		getState() {
			return this.$state;
		},

		setPosition(position: Position) {
			this.position = position;
			console.log("Position changed to: ", position);

			return this.position;
		},

		setSidebar(sidebar: boolean) {
			this.sidebar = sidebar;
			console.log("Sidebar changed to: ", sidebar);

			return this.sidebar;
		},

		setMarkers(markers: boolean) {
			this.markers = markers;
			console.log("Markers changed to: ", markers);

			return this.markers;
		},

		setTheme(theme: Theme) {
			this.theme = theme;
			console.log("Theme changed to: ", theme);

			return this.theme;
		},

		setLangauge(locale: string) {
			this.locale = locale;
			console.log("locale changed to: ", locale);

			useI18nStore().setLocale(this.locale);

			return this.locale;
		},
	},

	getters: {
		getPosition: (state) => state.position,
	},
});

onMessage("check-state", () => useSettingsStore().getState());

onMessage("set-position", ({ data }) => {
	let { position } = data;
	return useSettingsStore().setPosition(position);
});
onMessage("set-sidebar", ({ data }) => {
	let { sidebar } = data;
	return useSettingsStore().setSidebar(sidebar);
});
onMessage("set-markers", ({ data }) => {
	let { markers } = data;
	return useSettingsStore().setMarkers(markers);
});
onMessage("set-theme", ({ data }) => {
	let { theme } = data;
	return useSettingsStore().setTheme(theme);
});
onMessage("set-locale", ({ data }) => {
	let { locale } = data;
	return useSettingsStore().setLangauge(locale);
});
