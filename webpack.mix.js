(() => {
	let mix = require('laravel-mix');

	mix.js('./src/js/app.js', './dist/site/js/')
	.sass('./src/scss/app.scss', './dist/site/css/')
	.options({
		processCssUrls: false
	});
})();
