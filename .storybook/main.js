const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config, { configType }) => {

    // ---------------------------------------------
    // resolve absolute paths
    // ---------------------------------------------
    config.resolve.modules = [
      path.resolve(__dirname, "../src"),
      "node_modules",
    ];

    return config;
  }
}

