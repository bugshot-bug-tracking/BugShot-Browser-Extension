import fs from "fs-extra";
import { getManifest } from "~/manifest";
import { log, r } from "./utils";

export async function writeManifest() {
	await fs.writeJSON(r("extension/manifest.json"), getManifest(), {
		spaces: 4,
	});
	log("PRE", "write manifest.json");
}

writeManifest();
