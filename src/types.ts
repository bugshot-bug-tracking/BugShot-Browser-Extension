import { App } from "vue";

interface AppContext {
	app: App<Element>;
}

export type UserModule = (ctx: AppContext) => void;
