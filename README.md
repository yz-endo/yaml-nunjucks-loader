# yaml-nunjucks-loader

yaml-nunjucks-loader is an Webpack loader which loads Nunjucks-templated YAML file and returns
a function that creates an JS object from given parameters.

## Installation

yaml-nunjucks-loader requires [yaml](https://www.npmjs.com/package/yaml) and [Nunjucks](https://mozilla.github.io/nunjucks/).

Install required libraries to your NPM project:

```sh
$ npm install --save-dev yaml-nunjucks-loader yaml nunjucks
```

If you use Yarn, execute this instead:

```sh
$ yarn add --dev yaml-nunjucks-loader yaml nunjucks
```

## Usage

Webpack configuration:

```js
{
  // ...
  modules: {
    rules: [
      // ...
      { tests: /\.yaml$/, loader: 'yaml-nunjucks-loader' }
    ]
  }
}
```

You can pass [Nunjucks configuration options](http://mozilla.github.io/nunjucks/api.html#configure) as a JSON query parameter.

```js
{ tests: /\.yaml$/, loader: 'yaml-nunjucks-loader?{nunjucks:{autoescape:true}}' }
```

[examples/react-app](examples/react-app) uses the above configuration.

YAML template `pod.yaml`:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: {{ name }}
spec:
  containers:
    - name: ubuntu
      image: ubuntu:trusty
      imagePullPolicy: IfNotPresent
      command: ['sleep']
      args: ['{{ sleep }}']
```

`name` will be filled at runtime.

JavaScript code:

```js
import podTemplate from './pod.yaml'

const podManifest = podTemplate({ name: 'example', sleep: 600 })

console.log(podManifest)
```

`podManifest` is an Object as follows:

```js
{
  apiVersion: 'v1',
  kind: 'Pod',
  metadata: {
    name: 'example'
  },
  spec: {
    containers: [
      {
        name: 'ubuntu',
        image: 'ubuntu:trusty',
        imagePullPolicy: 'IfNotPresent',
        command: ['sleep'],
        args: ['600']
      }
    ]
  }
}
```

## Examples

* [React Example App](examples/react-app)
* [Vue Example App](examples/vue-app)

## Limitations

* Accessing external file is not possible
  * [Template inheritance](http://mozilla.github.io/nunjucks/templating.html#template-inheritance), [include](http://mozilla.github.io/nunjucks/templating.html#include) and [import](http://mozilla.github.io/nunjucks/templating.html#import) are not supported
