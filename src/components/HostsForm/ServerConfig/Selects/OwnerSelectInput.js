import React, { Fragment, useContext } from 'react'
import T from 'i18n-react'
import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash'
import { HostsFormContext } from 'lib/Context'
import SelectInput from 'components/HostsForm/SelectInput'
import OWNERS_QUERY from 'graphql/queries/owners'

const OwnerSelectInput = ({...attrs}) => {
  const {
    updateAttribute,
    attributes: {
      ownerId
    }
  } = useContext(HostsFormContext)
  const ownersFrom = (data) => get(data, 'currentUser.usergroups.edges', []).map(({ node: { id, name }}) => ({ id, name }))

  const { loading, data } = useQuery(OWNERS_QUERY, {
    onCompleted: (data) => {
      const owners = ownersFrom(data)

      if(owners.length === 1) {
        const { id: ownerId, name: ownerName } = owners[0]
        updateAttribute({ ownerId, ownerName })
      }
    }
  })

  const owners = ownersFrom(data)
  const handleChange = (ownerId) => {
    const { name: ownerName } = owners.find(({ id }) => id === ownerId)
    updateAttribute({ ownerId, ownerName })
  }

  return (
    <Fragment>
      { owners.length > 1 &&
        <SelectInput
          label={T.translate('hosts_form.owner_id')}
          placeholder={T.translate('hosts_form.placeholders.owner_id')}
          value={ownerId}
          loading={loading}
          onChange={handleChange}
          options={owners}
          {...attrs}
        />
      }
    </Fragment>
  )
}

export default OwnerSelectInput
