import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { get } from 'lodash'
import { HostsFormContext } from 'lib/Context'
import SelectInput from 'components/HostsForm/SelectInput'
import SUBNETS_BY_DOMAIN_QUERY from 'graphql/queries/subnetsByDomain'

const SubnetSelectInput = ({ ...attrs }) => {
  const {
    updateAttribute,
    attributes: {
      appTierName,
      subnetId
    },
    currentLocation: {
      location,
      domainName
    }
  } = useContext(HostsFormContext)

  const { loading, data } = useQuery(SUBNETS_BY_DOMAIN_QUERY, {
    variables: {
      search: `name=${appTierName}.${domainName} and location = ${location}`,
      location: location
    },
    onCompleted: (data) => {
      const domainId = get(data, 'domains.edges.0.node.id', undefined)
      updateAttribute({ domainId: domainId })
    }
  })

  const subnets = get(data, 'domains.edges.0.node.subnets.edges', [])
    .map(({ node: { id, name, vlanid }}) => ({ id, name, vlanid }))

  const handleChange = ({ subnetId }) => {
    const { vlanid = undefined } = subnets.find(({ id }) => id === subnetId)
    updateAttribute({ subnetId, vlanid })
  }

  return (
    <SelectInput
      value={subnetId}
      options={subnets}
      onChange={handleChange}
      loading={loading}
      {...attrs}
    />
  )
}

export default SubnetSelectInput
