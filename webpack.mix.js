const mix = require("laravel-mix");

// General Laravel Mix settings
mix.setPublicPath("./")
	.options({
		processCssUrls: false,
	})
	.disableNotifications();

mix.extract({ to: "./dist/vendor.js" }).options({ runtimeChunkPath: "./dist" });

// Background files
mix.copy("src/background/background.js", "dist").copy(
	"node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
	"./dist/libraries/"
);

// Popup files
mix.copy("src/popup/popup.html", "dist/popup")
	.js("src/popup/popup.js", "dist/popup")
	.vue();

// Content files
mix.js("src/content/content.js", "dist/content")
	.vue()
	.sass("src/content/Styles.scss", "dist/content/Styles.css");

// Misc files
mix.copyDirectory("public", "dist")
	.copy("src/manifest.json", "dist")
	.copy("README.md", "dist");
