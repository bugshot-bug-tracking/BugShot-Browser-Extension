import fs from "fs-extra";
import { getManifest, getManifestV2, Mode, Target } from "~/manifest";
import { isDev, log, r, target } from "./utils";

const mode = isDev ? Mode.DEV : Mode.PROD;

export async function writeManifest() {
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
}

writeManifest();
