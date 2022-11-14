import React, { useMemo } from 'react'
import { useFormContext, useController } from 'react-hook-form'
import { ValidatedOptions } from '@patternfly/react-core';
import T from 'i18n-react'
import { useQuery } from '@apollo/client'
import { get } from 'lodash'
import useUser from '../../../../hooks/useUser'
import SelectInput from '../../SelectInput'
import PUPPET_MASTERS_QUERY from '../../../../graphql/queries/puppetMasters'
import useLocation from '../../../../hooks/useLocation'

const PuppetMasterSelectInput = ({ name='puppetMasterId', ...attrs }) => {
  const { token } = useUser();
  const { control, watch } = useFormContext();
  const {
    field: { value, onChange },
    fieldState: { invalid }
  } = useController({
    control,
    name,
    rules: {
      required: true
    }
  })

  const validated = useMemo(() => (invalid ? ValidatedOptions.error : ValidatedOptions.success), [invalid])

  const locationCode = watch('locationCode')
  const { location } = useLocation(locationCode)

  const { loading, data } = useQuery(PUPPET_MASTERS_QUERY, {
    variables: {
      search: `feature = Puppet and location = ${location}`
    },
    skip: !location,
    fetchPolicy: 'cache-and-network',
    context: { token }
  })
  const puppetMasters = get(data, 'smartProxies.edges', []).map(({ node: { id, name }}) => ({ id, name }))

  return (
    <SelectInput
      label={T.translate('hosts_form.puppet_master_id')}
      placeholder={T.translate('hosts_form.placeholders.puppet_master_id')}
      value={value}
      loading={loading}
      onChange={onChange}
      options={puppetMasters}
      validated={validated}
      {...attrs}
    />
  )
}

export default PuppetMasterSelectInput
