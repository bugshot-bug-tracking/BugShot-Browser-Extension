const mix = require("laravel-mix");
const webpack = require("webpack");

mix
	.setPublicPath("./")
	.options({
		processCssUrls: false
	})
	.webpackConfig({
		plugins: [
			new webpack.DefinePlugin({
				__VUE_OPTIONS_API__: false,
				__VUE_PROD_DEVTOOLS__: true,
			}),
		],
	})
	.disableNotifications();

mix
	.copy("src/popup/popup.html", "dist/popup")
	.sass("src/popup/assets/css/popup.scss", "dist/popup/assets/css")
	.js('src/popup/popup.js', 'dist/popup').vue({ version: 3 });

mix
	.copy('src/background/background.js', 'dist')
	.copy('src/manifest.json', 'dist')
	.copy('README.md', 'dist')
	.copyDirectory('public', 'dist');



mix
	.js('src/content/content.js', 'dist/content').vue()



