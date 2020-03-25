import React, { useContext} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { get } from 'lodash'
import { HostsFormContext } from 'lisa-core/lib/Context'
import SelectInput from 'lisa-core/components/HostsForm/SelectInput'
import MODELS_QUERY from '../graphql/queries/models'

const ModelSelectInput = ({...attrs}) => {
  const {
    updateAttribute: handleChange,
    attributes: {
      modelId
    }
  } = useContext(HostsFormContext)

  const { loading, data } = useQuery(MODELS_QUERY)
  const models = get(data, 'models.edges', [])
    .map(({ node: { id, name } }) => { return { id, name }})

  return (
    <SelectInput
      value={modelId}
      options={models}
      onChange={handleChange}
      loading={loading}
      allowEmpty={true}
      {...attrs}
    />
  )
}

export default ModelSelectInput
