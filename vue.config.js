const path = require("path");

module.exports = {
  // vue.config.js
  publicPath: "/",
  chainWebpack(config) {
    config.entry("app").clear().add("./src/main.js").end();
    config.resolve.alias.set("@", path.join(__dirname, "./src"));
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, "src")],
          indentedSyntax: false,
        },
        prependData: '@import "@/sass/main.scss";',
      },
    },
  },
};
