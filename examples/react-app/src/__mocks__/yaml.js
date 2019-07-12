import nunjucks from 'nunjucks';
import yaml from 'yaml';

export default function yamlMock(params) {
  return yaml.parse(nunjucks.renderString(JSON.stringify(params)));
}
