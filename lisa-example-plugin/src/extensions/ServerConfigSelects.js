import React from 'react'
import { cloneDeep, remove } from 'lodash'
import ModelSelectInput from '../components/ModelSelectInput'
import SubnetSelectInput from '../components/SubnetSelectInput'

const ServerConfigSelects = (elements) => {
  const data = cloneDeep(elements)
  const [subnetIdSelect] = remove(data, ({ id }) => id === 'subnetId')

  return [
    ...data,
    {
      ...subnetIdSelect,
      components: [SubnetSelectInput, ...subnetIdSelect.components]
    },
    {
      id: 'modelId',
      components: [ModelSelectInput]
    }
  ]
}

export default ServerConfigSelects
