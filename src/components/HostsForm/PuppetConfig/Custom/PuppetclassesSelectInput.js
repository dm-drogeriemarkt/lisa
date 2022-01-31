import React, { useContext, useEffect, useMemo } from 'react'
import T from 'i18n-react'
import { useQuery } from '@apollo/client'
import { get, intersection } from 'lodash'
import useUser from 'hooks/useUser'
import { HostsFormContext } from 'lib/Context'
import SelectInput from 'components/HostsForm/SelectInput'
import PUPPET_CLASSES_BY_ENVIRONMENT_QUERY from 'graphql/queries/puppetClassesByEnvironment'

const PuppetclassesSelectInput = ({...attrs}) => {
  const { token } = useUser();
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
    context: { token },
    skip: !puppetEnvId,
    fetchPolicy: 'cache-and-network'
  })

  const options = useMemo(() => {
    return get(data, 'environment.puppetclasses.edges', [])
      .map(({ node: { id, name } }) => ({ id, name }))
  }, [data]);

  useEffect(() => {
    if(!loading) {
      const newOptionsIds = options.map(({ id }) => (id));
      const newPuppetclassIds = intersection(puppetclassIds, newOptionsIds)

      updateAttribute({ puppetclassIds: newPuppetclassIds })
    }
  }, [options, loading])

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
      options={options}
      multi={true}
      {...attrs}
    />
  )
}

export default PuppetclassesSelectInput
