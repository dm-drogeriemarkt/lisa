import React, { useContext } from 'react'
import T from 'i18n-react'
import { useQuery } from '@apollo/client'
import { get } from 'lodash'
import useUser from 'hooks/useUser'
import { HostsFormContext } from 'lib/Context'
import SelectInput from 'components/HostsForm/SelectInput'
import PUPPET_ENVS_QUERY from 'graphql/queries/puppetEnvs';

const PuppetEnvSelectInput = ({...attrs}) => {
  const { token } = useUser();
  const {
    updateAttribute,
    attributes: {
      puppetEnvId
    }
  } = useContext(HostsFormContext)

  const { loading, data } = useQuery(PUPPET_ENVS_QUERY, {
    fetchPolicy: 'cache-and-network',
    context: { token }
  })
  const puppetEnvs = get(data, 'environments.edges', []).map(({ node: { id, name } }) => ({ id, name }))

  const handleChange = (puppetEnvId) => {
    updateAttribute({ puppetEnvId })
  }

  return (
    <SelectInput
      label={T.translate('hosts_form.puppet_env_id')}
      placeholder={T.translate('hosts_form.placeholders.puppet_env_id')}
      loading={loading}
      value={puppetEnvId}
      options={puppetEnvs}
      onChange={handleChange}
      {...attrs}
    />
  )
}

export default PuppetEnvSelectInput
