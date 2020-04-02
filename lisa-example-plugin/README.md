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

Build plugin:

```bash
$ npm run build
```

To register a plugin in LISA, inside LISA root you must create an `src/plugins/lisa-example-plugin.js` file containing:

```js
import plugin from 'lisa-example-plugin'
export default plugin
```

You can use the following command:

```bash
$ printf "import plugin from 'lisa-example-plugin'\nexport default plugin" > ../src/plugins/lisa-example-plugin.js
```

Inside LISA directory, install plugin and start server:

```bash
$ npm install ./lisa-example-plugin
$ npm start
```

## Development

Inside plugin directory, run [rollup.js](https://rollupjs.org/) in watch mode:

```bash
$ npm start
```
