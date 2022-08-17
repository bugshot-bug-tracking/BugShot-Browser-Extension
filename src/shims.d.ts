import { ProtocolWithReturn } from "webext-bridge";
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
	}
}
