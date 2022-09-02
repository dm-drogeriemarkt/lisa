import React, { useMemo } from 'react'
import { useFormContext, useController } from 'react-hook-form';
import { ValidatedOptions } from '@patternfly/react-core';
import T from 'i18n-react'
import { useQuery } from '@apollo/client'
import { get } from 'lodash'
import useUser from 'hooks/useUser'
import SelectInput from 'components/HostsForm/SelectInput'
import SUBNETS_BY_DOMAIN_QUERY from 'graphql/queries/subnetsByDomain'
import useLocation from 'hooks/useLocation'

const SubnetSelectInput = ({ name='subnetId', required = true, ...attrs }) => {
  const { token } = useUser();
  const { control, setValue, watch } = useFormContext();

  const {
    field: {
      value,
      onChange: setSubnetId
    },
    fieldState: {
      invalid
    }
  } = useController({
    control,
    name,
    defaultValue: null,
    rules: {
      required: required
    }
  });

  const [locationCode, appTierName] = watch(['locationCode', 'appTierName'])

  const validated = useMemo(() => invalid ? ValidatedOptions.error : ValidatedOptions.success, [invalid])

  const { location, domainName } = useLocation(locationCode)
  const { loading, data } = useQuery(SUBNETS_BY_DOMAIN_QUERY, {
    context: { token },
    variables: {
      search: `name=${appTierName}.${domainName} and location = ${location}`,
      location: location
    },
    onCompleted: (data) => {
      const domainId = get(data, 'domains.edges.0.node.id', undefined)
      setValue('domainId', domainId)
    },
    fetchPolicy: 'cache-and-network'
  })

  const options = get(data, 'domains.edges.0.node.subnets.edges', [])
    .map(({ node: { id, name, vlanid } }) => ({ id, name, vlanid }))

  const handleChange = (subnetId) => {
    const { vlanid } = options.find(({ id }) => id === subnetId) || {}
    setValue('vlanid', vlanid)
    setSubnetId(subnetId)
  }

  return (
    <SelectInput
      label={T.translate('hosts_form.subnet_id')}
      placeholder={T.translate('hosts_form.placeholders.subnet_id')}
      value={value}
      options={options}
      onChange={handleChange}
      loading={loading}
      clearable={true}
      isRequired={required}
      validated={validated}
      {...attrs}
    />
  )
}

export default SubnetSelectInput
