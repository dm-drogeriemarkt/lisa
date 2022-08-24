import React, { Fragment, useContext, useState } from 'react'
import T from 'i18n-react'
import { useQuery } from '@apollo/client';
import useUser from 'hooks/useUser'
import { HostsFormContext } from 'lib/Context'
import SelectInput from 'components/HostsForm/SelectInput'
import OWNERS_QUERY from 'graphql/queries/owners'

const OwnerSelectInput = ({...attrs}) => {
  const { token } = useUser();
  const [options, setOptions] = useState([])
  const {
    updateAttribute,
    attributes: {
      ownerId
    }
  } = useContext(HostsFormContext)

  const { loading } = useQuery(OWNERS_QUERY, {
    context: { token },
    onCompleted: (data) => {
      const { currentUser: { id, fullname: name, usergroups: { edges: usergroups } } } = data
      setOptions([
        { id, name },
        ...usergroups.map(({ node: { id, name } }) => ({ id, name }))
      ]);
      updateAttribute({ ownerId: id })
    }
  })

  const handleChange = (ownerId) => updateAttribute({ ownerId });

  return (
    <Fragment>
      { options.length > 1 &&
        <SelectInput
          label={T.translate('hosts_form.owner_id')}
          placeholder={T.translate('hosts_form.placeholders.owner_id')}
          value={ownerId}
          loading={loading}
          onChange={handleChange}
          options={options}
          {...attrs}
        />
      }
    </Fragment>
  )
}

export default OwnerSelectInput
