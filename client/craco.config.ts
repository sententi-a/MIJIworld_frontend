const path = require("path");
// import from 'react-app-alias'

export {};

module.exports = {
  // plugins: [
  //   {
  //     plugin: CracoAliasPlugin,
  //     options: {
  //       source: "tsconfig",
  //       tsConfigPath: "tsconfig.paths.json",
  //     },
  //   },
  // ],
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@apis": path.resolve(__dirname, "src/apis"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@types": path.resolve(__dirname, "src/types"),
    },
  },
};
