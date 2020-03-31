import React, { useContext } from 'react'
import T from 'i18n-react'
import { useQuery } from '@apollo/react-hooks'
import { get } from 'lodash'
import { HostsFormContext } from 'lib/Context'
import SelectInput from 'components/HostsForm/SelectInput'
import PUPPET_CLASSES_BY_ENVIRONMENT_QUERY from 'graphql/queries/puppetClassesByEnvironment'

const PuppetclassesSelectInput = ({...attrs}) => {
  const {
    updateAttribute,
    attributes: {
      puppetclassIds,
      puppetEnvId
    }
  } = useContext(HostsFormContext)

  const { loading, data } = useQuery(PUPPET_CLASSES_BY_ENVIRONMENT_QUERY, {
    variables: {
      id: puppetEnvId
    },
    skip: !puppetEnvId
  })

  const puppetclasses = get(data, 'environment.puppetclasses.edges', [])
    .map(({ node: { id, name }}) => ({ id, name }))

  const handleChange = (puppetclassIds) => {
    updateAttribute({ puppetclassIds })
  }

  return (
    <SelectInput
      label={T.translate('hosts_form.puppetclass_ids')}
      placeholder={T.translate('hosts_form.placeholders.puppetclass_ids')}
      value={puppetclassIds}
      loading={loading}
      onChange={handleChange}
      options={puppetclasses}
      multi={true}
      {...attrs}
    />
  )
}

export default PuppetclassesSelectInput
