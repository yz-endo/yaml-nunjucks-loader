const lu = require('loader-utils')

module.exports = function loader(source) {
  const query = lu.getOptions(this) || {}
  return [
    `var nunjucks = require("${
      this.target === 'web' ? 'nunjucks/browser/nunjucks' : 'nunjucks'
    }");`,
    'var YAML = require("yaml");',
    `nunjucks.configure(${JSON.stringify(query)});`,
    'function render(params) {',
    `  return YAML.parse(nunjucks.renderString(${JSON.stringify(source)}, params));`,
    '}',
    'module.exports = render;'
  ].join('\n')
}
