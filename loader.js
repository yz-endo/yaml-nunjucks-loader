const nunjucks = require('nunjucks')
const lu = require('loader-utils')

module.exports = function loader(source) {
  const query = lu.getOptions(this) || {}
  const config = Object.assign({ autoescape: false }, query.nunjucks || {})
  const env = new nunjucks.Environment()
  const relPath = this.resourcePath.substr(this.context.length + 1)
  const precompiled = nunjucks.precompileString(source, {
    env,
    name: relPath,
    wrapper: templates => `(function () { ${templates[0].template} })()`
  })
  return [
    'var YAML = require("yaml");',
    `var nunjucks = require("${
      this.target === 'web' ? 'nunjucks/browser/nunjucks-slim' : 'nunjucks'
    }");`,
    'var env = new nunjucks.Environment(new nunjucks.PrecompiledLoader({',
    `  "${relPath}": ${precompiled}`,
    `}), ${JSON.stringify(config, undefined, 0)});`,
    'function render(params) {',
    `  return YAML.parse(env.render("${relPath}", params));`,
    '}',
    'module.exports = render;'
  ].join('\n')
}
