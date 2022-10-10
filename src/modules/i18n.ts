import { UserModule } from "~/types";
import { createI18n } from "vue-i18n";

import messages from "@intlify/unplugin-vue-i18n/messages";
import datetimeFormats from "~/config/datetimeFormats";

export const install: UserModule = ({ app }) => {
	const i18n = createI18n({
		legacy: false,
		globalInjection: true,
		locale: "en",
		fallbackLocale: "en",
		messages: messages,
		datetimeFormats: datetimeFormats,
	});

	app.use(i18n);
};

export default { install };
