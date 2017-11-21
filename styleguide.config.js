const path = require('path');
module.exports = {
  ignore:['**/Link 2.js','**/Badge.js'], /*Ignored as It was giving some error */
  components: 'fusion/**/*.js',
   webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'lib/styleguide/wrapper')
  }
};