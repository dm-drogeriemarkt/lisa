import React, { useContext} from 'react'
import T from 'i18n-react'
import { useQuery } from '@apollo/client'
import { get } from 'lodash'
import { HostsFormContext } from 'lisa-core/lib/Context'
import SelectInput from 'lisa-core/components/HostsForm/SelectInput'
import MODELS_QUERY from '../graphql/queries/models'

const ModelSelectInput = ({...attrs}) => {
  const {
    updateAttribute,
    attributes: {
      modelId
    }
  } = useContext(HostsFormContext)

  const { loading, data } = useQuery(MODELS_QUERY)
  const models = get(data, 'models.edges', [])
    .map(({ node: { id, name } }) => { return { id, name }})
  const label = T.translate('hosts_form.model_id')
  const placeholder = T.translate('hosts_form.placeholders.model_id')
  const handleChange = (modelId) => {
    updateAttribute({ modelId, subnetId: undefined })
  }

  return (
    <SelectInput
      label={label}
      placeholder={placeholder}
      value={modelId}
      options={models}
      onChange={handleChange}
      loading={loading}
      clearable={true}
      required={false}
      {...attrs}
    />
  )
}

export default ModelSelectInput
