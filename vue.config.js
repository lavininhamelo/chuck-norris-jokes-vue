const path = require("path");

module.exports = {
  // vue.config.js
  publicPath: "/vue-vehiculum-de/",
  chainWebpack(config) {
    config.entry("app").clear().add("./src/main.js").end();
    config.resolve.alias.set("@", path.join(__dirname, "./src"));
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ["/Users/ninah/Projects/TESTE/vue-vehiculum-de/src"],
          indentedSyntax: false,
        },
        prependData: '@import "@/sass/main.scss";',
      },
    },
  },
};
