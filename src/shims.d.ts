import { ProtocolWithReturn } from "webext-bridge";
import { Position, SettingsState, Theme } from "./models/settings-store";
import { User } from "./models/User";

declare module "*.vue" {
	import { type DefineComponent } from "vue";
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module "webext-bridge" {
	export interface ProtocolMap {
		// define message protocol types
		// see https://github.com/antfu/webext-bridge#type-safe-protocols
		"tab-prev": { title: string | undefined };
		"get-current-tab": ProtocolWithReturn<
			{ tabId: number },
			{ title: string }
		>;
		getUser: ProtocolWithReturn<{}, User>;
		getToken: ProtocolWithReturn<{}, string>;
		setToken: ProtocolWithReturn<{ token: string }, boolean>;
		"check-state": ProtocolWithReturn<{}, SettingsState>;

		// for changing settings return the setting that is the new state in store
		"set-position": ProtocolWithReturn<{ position: Position }, Position>;
		"set-sidebar": ProtocolWithReturn<{ sidebar: boolean }, boolean>;
		"set-theme": ProtocolWithReturn<{ theme: Theme }, Theme>;
		"set-locale": ProtocolWithReturn<{ locale: string }, string>;

		// go throu background to save in local storeage the prefference (GLOBAL SETTINGS)
		"background-set-locale": ProtocolWithReturn<
			{ locale: string; tab_id: number },
			string
		>;
		"background-set-theme": ProtocolWithReturn<
			{ theme: Theme; tab_id: number },
			Theme
		>;

		"content-status": ProtocolWithReturn<{}, string>;
	}
}
