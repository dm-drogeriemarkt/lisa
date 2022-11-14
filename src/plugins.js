import { merge } from 'lodash'

const areWeTestingWithJest = false // process.env.JEST_WORKER_ID !== undefined

const pluginsExtensions = []
const pluginsLocales = {}
const importAll = (r) => { return r.keys().map(r) }
const modules = [] // areWeTestingWithJest ? [] : importAll(require.context('./plugins', false, /plugins\/.*\.js$/))

function registerPlugin({ default: { extensions, locales }}) {
  extensions.map(ext => pluginsExtensions.push(ext))
  merge(pluginsLocales, locales)
}

modules.map(registerPlugin)

export {
  pluginsExtensions,
  pluginsLocales
}
