import { merge } from 'lodash'

const pluginsExtensions = []
const pluginsLocales = {}
const importAll = (r) => { return r.keys().map(r) }
const modules = importAll(require.context('./plugins', false, /\.js$/))

function registerPlugin({ default: { extensions, locales }}) {
  extensions.map(ext => pluginsExtensions.push(ext))
  merge(pluginsLocales, locales)
}

modules.map(registerPlugin)

export {
  pluginsExtensions,
  pluginsLocales
}
