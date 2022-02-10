import React, { useContext } from 'react'
import T from 'i18n-react'
import { useQuery } from '@apollo/client'
import { get } from 'lodash'
import useUser from 'hooks/useUser'
import { HostsFormContext } from 'lib/Context'
import SelectInput from 'components/HostsForm/SelectInput'
import SUBNETS_BY_DOMAIN_QUERY from 'graphql/queries/subnetsByDomain'
import useLocation from 'hooks/useLocation'

const SubnetSelectInput = ({ ...attrs }) => {
  const { token } = useUser();
  const {
    updateAttribute,
    attributes: {
      appTierName,
      subnetId,
      locationCode
    }
  } = useContext(HostsFormContext)

  const { location, domainName } = useLocation(locationCode)

  const { loading, data } = useQuery(SUBNETS_BY_DOMAIN_QUERY, {
    context: { token },
    variables: {
      search: `name=${appTierName}.${domainName} and location = ${location}`,
      location: location
    },
    onCompleted: (data) => {
      const domainId = get(data, 'domains.edges.0.node.id', undefined)
      updateAttribute({ domainId: domainId })
    },
    fetchPolicy: 'cache-and-network'
  })

  const subnets = get(data, 'domains.edges.0.node.subnets.edges', [])
    .map(({ node: { id, name, vlanid }}) => ({ id, name, vlanid }))

  const label = T.translate('hosts_form.subnet_id')
  const placeholder = T.translate('hosts_form.placeholders.subnet_id')
  const handleChange = (subnetId) => {
    const { vlanid } = subnets.find(({ id }) => id === subnetId) || {}
    updateAttribute({ subnetId, vlanid })
  }

  return (
    <SelectInput
      label={label}
      placeholder={placeholder}
      value={subnetId}
      options={subnets}
      onChange={handleChange}
      loading={loading}
      clearable={true}
      {...attrs}
    />
  )
}

export default SubnetSelectInput
