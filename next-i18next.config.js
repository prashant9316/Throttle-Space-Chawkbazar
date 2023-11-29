/** @type {import('next-i18next').UserConfig} */
const path = require("path");
module.exports = {
	i18n: {
		locales: ["en", "de", "es", "ar", "he", "zh"],
		defaultLocale: "en",
		localeDetection: false,
	},
	localePath: path.resolve("./public/locales"),
};
