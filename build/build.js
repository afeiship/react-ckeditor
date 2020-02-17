import baseConfig from '.';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from '@feizheng/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build({
    library: 'ReactCkeditor'
  }),
  externals: externals.base({
    '@feizheng/noop': '@feizheng/noop',
    '@ckeditor/ckeditor5-build-classic': '@ckeditor/ckeditor5-build-classic'
  }),
  plugins: [plugins.clean(), plugins.copyStyles()]
});
