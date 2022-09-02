import React, { useMemo } from 'react'
import { useFormContext, useController } from 'react-hook-form'
import { ValidatedOptions } from '@patternfly/react-core';
import T from 'i18n-react'
import { useQuery } from '@apollo/client'
import { get } from 'lodash'
import useUser from 'hooks/useUser'
import SelectInput from 'components/HostsForm/SelectInput'
import PUPPET_ENVS_QUERY from 'graphql/queries/puppetEnvs';

const PuppetEnvSelectInput = ({ name='puppetEnvId', ...attrs }) => {
  const { token } = useUser();
  const { control } = useFormContext();
  const {
    field: {
      value, onChange
    },
    fieldState: { invalid }
  } = useController({
    control,
    name,
    rules: {
      required: true
    }
  })

  const validated = useMemo(() => (invalid ? ValidatedOptions.error : ValidatedOptions.success), [invalid])

  const { loading, data } = useQuery(PUPPET_ENVS_QUERY, {
    fetchPolicy: 'cache-and-network',
    context: { token }
  })

  const puppetEnvs = get(data, 'environments.edges', []).map(({ node: { id, name } }) => ({ id, name }))

  return (
    <SelectInput
      label={T.translate('hosts_form.puppet_env_id')}
      placeholder={T.translate('hosts_form.placeholders.puppet_env_id')}
      loading={loading}
      value={value}
      options={puppetEnvs}
      onChange={onChange}
      validated={validated}
      {...attrs}
    />
  )
}

export default PuppetEnvSelectInput
