// Vue CLI -> Working with Webpack -> Adding a New Loader
// https://cli.vuejs.org/guide/webpack.html#adding-a-new-loader

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('yaml-nunjucks-loader')
      .test(/\.yaml$/)
      .use('yaml-nunjucks-loader')
      .loader('yaml-nunjucks-loader')
      .end()
  }
}
