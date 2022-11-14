import React, { Fragment, useState, useMemo } from 'react'
import { ValidatedOptions } from '@patternfly/react-core'
import { useFormContext, useController } from 'react-hook-form'
import { useQuery } from '@apollo/client'
import T from 'i18n-react'
import useUser from '../../../../hooks/useUser'
import SelectInput from '../../SelectInput'
import OWNERS_QUERY from '../../../../graphql/queries/owners'

const OwnerSelectInput = ({ name='ownerId', required = true, ...attrs }) => {
  const { token } = useUser();
  const [options, setOptions] = useState([]);
  const { control, resetField } = useFormContext();
  const {
    field: {
      value: ownerId,
      onChange: setOwnerId
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

  const validated = useMemo(() => invalid ? ValidatedOptions.error : ValidatedOptions.success, [invalid])

  const { loading } = useQuery(OWNERS_QUERY, {
    context: { token },
    onCompleted: (data) => {
      const { currentUser: { id, fullname: name, usergroups: { edges: usergroups } } } = data
      setOptions([
        { id, name },
        ...usergroups.map(({ node: { id, name } }) => ({ id, name }))
      ]);
      resetField('ownerId', { defaultValue: id, keepDirty: true });
    }
  });

  return (
    <Fragment>
      { (invalid || options.length > 1) &&
        <SelectInput
          label={T.translate('hosts_form.owner_id')}
          placeholder={T.translate('hosts_form.placeholders.owner_id')}
          value={ownerId}
          loading={loading}
          onChange={setOwnerId}
          options={options}
          validated={validated}
          isRequired={required}
          {...attrs}
        />
      }
    </Fragment>
  )
}

export default OwnerSelectInput
