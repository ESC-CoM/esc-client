const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    'storybook-addon-react-router-v6',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  reactOptions: {
    fastRefresh: true,
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, '../src'),
      styles: path.resolve(__dirname, '../src/styles'),
    };

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      include: path.resolve(__dirname, '../src'),
      use: [
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sassOptions: {
              includePaths: [path.appSrc + '/src'],
            },
            additionalData: `
              @import "src/styles/_color.scss";
              @import "src/styles/_mixin.scss";
              @import "src/styles/_variables.scss";
              @import "src/styles/font.scss";
              @import "src/styles/main.scss";
              @import "src/styles/reset.scss";
            `,
          },
        },
      ],
    });

    return config;
  },
};
