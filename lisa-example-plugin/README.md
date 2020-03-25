# lisa-example-plugin

## Setup

Download and installing packages:

```bash
$ npm install
```

In order to use LISA core components you have to install `lisa-core` package from `lisa/src` directory:

```bash
$ npm install ../src
```

To register a plugin in LISA, inside LISA root you must create an `src/plugins/lisa-example-plugin.js` file containing:

```js
import plugin from 'lisa-example-plugin'
export default plugin
```

## Development

Inside plugin directory, run [rollup.js](https://rollupjs.org/) in watch mode:

```bash
$ npm start
```

Inside LISA directory, install plugin from local path and start server:

```bash
$ npm install ./lisa-example-plugin
$ npm start
```

## Build

Inside plugin directory, Build plugin and create package file:

```bash
$ npm run build
$ npm pack
```

Inside LISA directory, install plugin from package file and run build:

```bash
$ npm install ./lisa-example-plugin/lisa-example-plugin-0.0.1.tgz
$ npm run build
```
