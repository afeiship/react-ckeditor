import baseConfig from './base';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins
} from '@jswork/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.docs(),
  output: outputs.dev(),
  devtool: configs.devtool(),
  devServer: configs.devServer({
    proxy: {
      '/weibo_api': {
        target: 'https://picupload.weibo.com',
        changeOrigin: true,
        pathRewrite: { '^/weibo_api/': '/' }
      }
    }
  }),
  plugins: [plugins.html()]
});
