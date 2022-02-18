import React, { useContext } from 'react'
import T from 'i18n-react'
import { useQuery } from '@apollo/client'
import { get } from 'lodash'
import SelectInput from 'components/HostsForm/SelectInput'
import { HostsFormContext } from 'lib/Context'
import PUPPET_MASTERS_QUERY from 'graphql/queries/puppetMasters'
import useLocation from 'hooks/useLocation'

const PuppetMasterSelectInput = ({...attrs}) => {
  const {
    updateAttribute,
    attributes: {
      locationCode,
      puppetMasterId
    }
  } = useContext(HostsFormContext)

  const { location } = useLocation(locationCode)

  const { loading, data } = useQuery(PUPPET_MASTERS_QUERY, {
    variables: {
      search: `feature = Puppet and location = ${location}`
    },
    skip: !location,
    fetchPolicy: 'cache-and-network'
  })
  const puppetMasters = get(data, 'smartProxies.edges', []).map(({ node: { id, name }}) => ({ id, name }))

  const handleChange = (puppetMasterId) => {
    updateAttribute({ puppetMasterId })
  }

  return (
    <SelectInput
      label={T.translate('hosts_form.puppet_master_id')}
      placeholder={T.translate('hosts_form.placeholders.puppet_master_id')}
      value={puppetMasterId}
      loading={loading}
      onChange={handleChange}
      options={puppetMasters}
      {...attrs}
    />
  )
}

export default PuppetMasterSelectInput
