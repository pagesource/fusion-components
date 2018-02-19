const path = require("path");

module.exports = {
  sections: [
    {
      name: "Introduction",
      content: "lib/styleguide/introduction.md",
      sections: [
        {
          name: "Installation",
          content: "lib/styleguide/installation.md",
          description: "The description for the installation section"
        }
      ]
    },
    {
      name: "Fusion Components",
      components: "fusion/**/*.js"
    }
  ],
  ignore: [
    "**/Link 2.js",
    "**/Column.js",
    "**/Column 2.js",
    "**/EmailSubscribe.js",
    "**/Row.js",
    "**/Row 2.js"
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          include: [
            path.resolve(__dirname, "fusion"),
            path.resolve(__dirname, "docs"),
            path.resolve(__dirname, "lib", "styleguide")
          ],
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"],
            plugins: ["transform-object-rest-spread"],
            babelrc: false
          }
        }
      ]
    }
  },
  defaultExample: true,
  showCode: true,
  editorConfig: {
    lineNumbers: false
  },
  styleguideDir: path.resolve(__dirname, "docs"),
  getExampleFilename(componentPath) {
    return componentPath
      .replace(
        path.dirname(componentPath),
        `${__dirname}/lib/styleguide/components`
      )
      .replace(path.extname(componentPath), ".md");
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, "/lib/styleguide/wrapper")
  }
};
