// generate stub index.html files for dev entry
import { execSync } from "child_process";
import fs from "fs-extra";
import chokidar from "chokidar";
import { r } from "./utils";

fs.ensureDirSync(r("extension"));

async function writeManifest() {
	// create manifest
	// this approche works with chokidar, direct creation doesn`t
	execSync("npx esno ./scripts/manifest.ts", { stdio: "inherit" });

	// check if created then move to dev sub-directory
	await fs.ensureFile(r("extension/manifest.json"));
	await fs.move("extension/manifest.json", "extension/dev/manifest.json", {
		overwrite: true,
	});
}

writeManifest();

// update manifest when either manifest.ts or package.json are changed
chokidar.watch([r("src/manifest.ts"), r("package.json")]).on("change", () => {
	writeManifest();
});

fs.copySync(r("src/assets"), r("extension/dev/assets"));

// update dev/assets folder when new files are added in src/assets
chokidar.watch([r("src/assets")]).on("add", () => {
	fs.copySync(r("src/assets"), r("extension/dev/assets"), {
		overwrite: true,
	});
});
