import { merge } from 'lodash'

const pluginsExtensions = []
const pluginsLocales = {}

const modules = import.meta.glob('./plugins/*.js', { eager: true })

function registerPlugin({ default: { extensions, locales }}) {
  extensions.map(ext => pluginsExtensions.push(ext))
  merge(pluginsLocales, locales)
}

Object.values(modules).map(registerPlugin)

export {
  pluginsExtensions,
  pluginsLocales
}
