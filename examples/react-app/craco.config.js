module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Insert yaml-nunjucks-loader
      // You will probably have to adjust the loader's position on upgrading CRA/react-scripts
      webpackConfig.module.rules[2].oneOf.unshift({ test: /\.yaml$/, use: 'yaml-nunjucks-loader?{nunjucks:{autoescape:true}}' });
      return webpackConfig;
    }
  }
};
