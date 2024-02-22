import { dirname, resolve } from "node:path";
import { bgCyan, bgRed, black } from "kolorist";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const port = parseInt(process.env.PORT || "") || 3303;
export const r = (...args: string[]) => resolve(__dirname, "..", ...args);
export const isDev = process.env.NODE_ENV !== "production";
export const isFirefox = process.env.EXTENSION === "firefox";
export const isWin = process.platform === "win32";
export const target = process.env.NODE_TARGET?.toLowerCase();

export function log(name: string, message: string) {
	console.log(black(bgCyan(` ${name} `)), message);
}

export function error(message: string) {
	console.log(black(bgRed(` ERROR `)), message);
}
