import { resolve } from "path";
import { bgCyan, bgRed, black } from "kolorist";

export const r = (...args: string[]) => resolve(__dirname, "..", ...args);
export const isDev = process.env.NODE_ENV !== "production";
export const isWin = process.platform === "win32";
export const target = process.env.NODE_TARGET?.toLowerCase();

export function log(name: string, message: string) {
	// eslint-disable-next-line no-console
	console.log(black(bgCyan(` ${name} `)), message);
}

export function error(message: string) {
	// eslint-disable-next-line no-console
	console.log(black(bgRed(` ERROR `)), message);
}
