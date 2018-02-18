const path = require('path');

module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
          description: 'The description for the installation section'
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md'
        }
      ]
    },
    {
      name: 'Fusion Components',
      // content: 'docs/fusion.md',
      components: 'fusion/**/*.js'
    }
  ],
  ignore:[
        '**/Link 2.js',
        '**/Badge.js',
        '**/Blockquote.js ',
        '**/Code.js',
        '**/Column 2.js',
        '**/Heading 2.js',
        '**/Panel.js',
        '**/PanelFooter.js',
        '**/PanelHeader.js',
        '**/Row 2.js',
        '**/Slider.js',
        '**/Truncate.js',
      ], /*Ignored as It was giving some error */
  // components: 'fusion/**/*.js',
   webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          include: [
            path.resolve(__dirname, 'fusion'),
            path.resolve(__dirname, 'docs'),
            path.resolve(__dirname, 'lib', 'styleguide')
          ],
          loader: 'babel-loader'
        }
      ]
    }
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'lib/styleguide/wrapper')
  }
};
