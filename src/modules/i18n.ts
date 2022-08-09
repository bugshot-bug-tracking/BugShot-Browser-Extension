import { UserModule } from "~/types";
import { createI18n } from "vue-i18n";

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const messages = Object.fromEntries(
	Object.entries(
		import.meta.glob("~/../locales/*.json", { eager: true })
	).map(([key, value]: any) => {
		const json = key.endsWith(".json");
		return [key.slice(11, json ? -5 : -4), value.default];
	})
);

export const install: UserModule = ({ app }) => {
	const i18n = createI18n({
		legacy: false,
		globalInjection: true,
		locale: "en",
		fallbackLocale: "en",
		messages: messages,
		// datetimeFormats: datetimeFormats,
	});

	app.use(i18n);
};

export default { install };
