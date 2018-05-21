const CopyWebpackPlugin = require('copy-webpack-plugin')
import webpack from 'webpack';

module.exports = (webpackConfig, env) => {
  webpackConfig.output.chunkFilename = '[name].[chunkhash].js';
  const APP_ENV = process.env.APP_ENV;
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new CopyWebpackPlugin([
      {
        from: 'src/public',
        to: APP_ENV === 'production' ? '../' : webpackConfig.output.outputPath,
      },
    ]),
    new webpack.DefinePlugin({
      APP_ENV: JSON.stringify(APP_ENV),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // 指定公共 bundle 的名称。
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]);

  return webpackConfig;
};
