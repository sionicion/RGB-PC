const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      externals: ["electron"],
      nodeModulesPath: ["./node_modules"],
      builderOptions: {
        productName: "RGB-PC",
        mac: {
          category: "public.app-category.entertainment",
          target: "default",
        },
      },
    },
  },
});
