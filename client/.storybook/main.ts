import type { StorybookConfig } from "@storybook/react-webpack5";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = {
  stories: [
    "../src/stories/*.stories.@(js|jsx|ts|tsx)",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "../src/components"),
      "@assets": path.resolve(__dirname, "../src/assets"),
      "@hooks": path.resolve(__dirname, "../src/hooks"),
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@pages": path.resolve(__dirname, "../src/pages"),
      "@apis": path.resolve(__dirname, "../src/apis"),
      "@constants": path.resolve(__dirname, "../src/constants"),
      "@customTypes": path.resolve(__dirname, "../src/types"),
      "@styles": path.resolve(__dirname, "../src/styles"),
    };
    return config;

    // config.resolve.plugins.push(
    //   new TsconfigPathsPlugin({
    //     configFile: path.resolve(__dirname, "../tsconfig.json"),
    //   })
    // );
    // return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
