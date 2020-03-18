// TODO: import plugins dynamically with import()
import { extensions as lisaPluginExtensions } from 'lisa-plugin'
import { locales as lisaPluginLocales } from 'lisa-plugin'

const pluginsExtensions = [...lisaPluginExtensions]
const pluginsLocales = lisaPluginLocales

export {
  pluginsExtensions,
  pluginsLocales
}
