const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" ? "/abz.agency-test-task/" : "/",
  transpileDependencies: true,
  lintOnSave: false,
});
