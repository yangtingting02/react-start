const path = require('path');

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    ['import', { "libraryName": "antd", "style": "css" }]
  ],
  theme: './theme.config.js',
  publicPath: `/`,
  outputPath: `./dist`,
  html: { template: 'src/entry.ejs' },
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
    production: {
      extraBabelPlugins: ['dva-hmr'],
    }
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
  },
  ignoreMomentLocale: true,
  disableDynamicImport: true,
  hash: true,
}
