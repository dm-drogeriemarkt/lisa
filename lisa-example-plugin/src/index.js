import React from 'react'
import locales from './locales/en.json'
import ServerConfigSelects from './extensions/ServerConfigSelects'

const extensions = [
  {
    slot: 'HostsForm/ServerConfig/Selects',
    extension: ServerConfigSelects
  }
]

export default {
  extensions,
  locales
}
