// generate stub index.html files for dev entry
import { execSync, spawn } from "child_process";
import chokidar from "chokidar";
import fs from "fs-extra";
import { getManifest, getManifestV2, Mode, Target } from "~/manifest";
import { error, isDev, log, r, target } from "./utils";

const mode = isDev ? Mode.DEV : Mode.PROD;

(async () => {
	let valid = target ? Object.values<string>(Target).includes(target) : false;

	if (!valid)
		return error(
			"Target not valid, please set process.env.NODE_TARGET basse on src/manifest Target enum."
		);

	fs.ensureDirSync(r(`dist/${mode}/${target}`));

	await fs.copy(r("src/assets"), r(`dist/${mode}/${target}/assets`));

	if (isDev) {
		await writeManifestDev();
		watchForChange();
	} else {
		await writeManifest();
	}

	if (target === Target.FIREFOX) {
		await fs.copy(
			r("src/background/index.html"),
			r(`dist/${mode}/${target}/background.html`)
		);

		await fs.ensureFile(r(`dist/${mode}/${target}/background.html`));
		log("INFO", `moved background.html for ${target}`);
	}

	// execSync(`pnpm vite build --mode ${mode}`, { stdio: "inherit" });
	// execSync(`pnpm vite build --mode ${mode} --config vite.config.content.ts`, {
	// 	stdio: "inherit",
	// });

	let popup_background = spawn(`pnpm vite build --mode ${mode}`, {
		shell: true,
	});
	popup_background.stdout.on("data", (data) => console.log(data.toString()));

	let content = spawn(
		`pnpm vite build --mode ${mode} --config vite.config.content.ts`,
		{
			shell: true,
		}
	);
	content.stdout.on("data", (data) => console.log(data.toString()));
})();

async function writeManifest() {
	// create manifest
	await fs.writeJSON(
		r(`dist/${mode}/${target}/manifest.json`),
		target === Target.FIREFOX
			? getManifestV2(target as Target)
			: getManifest(target as Target),
		{
			spaces: 4,
		}
	);

	log("INFO", `write manifest.json for ${target}`);

	// check if created
	await fs.ensureFile(r(`dist/${mode}/${target}/manifest.json`));
}

async function writeManifestDev() {
	// create manifest
	// this approche works with chokidar, direct creation doesn`t
	execSync("npx esno ./scripts/manifest.ts", { stdio: "inherit" });

	// check if created
	await fs.ensureFile(r(`dist/${mode}/${target}/manifest.json`));
}

async function watchForChange() {
	// update manifest when either manifest.ts or package.json are changed
	chokidar
		.watch([r("src/manifest.ts"), r("package.json")])
		.on("change", () => {
			writeManifest();
		});

	// update dev/assets folder when new files are added in src/assets
	chokidar.watch([r("src/assets")]).on("add", () => {
		fs.copySync(r("src/assets"), r(`dist/${mode}/${target}/assets`), {
			overwrite: true,
		});
	});
}