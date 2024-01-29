const { i18n } = require("./next-i18next.config");
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV !== "production",
  runtimeCaching,
});

module.exports = withPWA({
  i18n,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: [
      "images.contentstack.io",
      "cdn.notonthehighstreet.com",
      "dwgokgnbz84c3.cloudfront.net",
      "dwgokgnbz84c3.cloudfront.net",
      "m.media-amazon.com",
      "tesorostoreuser.vercel.app",
      "res.cloudinary.com"
    ]
  }
});