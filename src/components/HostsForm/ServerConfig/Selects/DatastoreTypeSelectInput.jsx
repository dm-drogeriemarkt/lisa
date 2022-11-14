import React, { Fragment, useEffect, useMemo } from 'react'
import { ValidatedOptions } from '@patternfly/react-core';
import { useFormContext, useController } from 'react-hook-form'
import T from 'i18n-react'
import SelectInput from '../../SelectInput'
import useLocation from '../../../../hooks/useLocation'

const DatastoreTypeSelectInput = ({ name='datastoreTypeId', required = true, ...attrs }) => {
  const { control, resetField, watch } = useFormContext();

  const {
    field: {
      value: datastoreTypeId,
      onChange: setDatastoreTypeId
    },
    fieldState: {
      invalid
    }
  } = useController({
    control,
    name,
    rules: {
      required: required
    }
  })

  const validated = useMemo(() => invalid ? ValidatedOptions.error : ValidatedOptions.success, [invalid])

  const locationCode = watch('locationCode');
  const { datastoreTypes = [] } = useLocation(locationCode)

  useEffect(() => {
    if(datastoreTypes.length === 1) {
      setDatastoreTypeId(datastoreTypes[0].id)
    } else {
      resetField('datastoreTypeId', { keepDirty: true })
    }
  }, [datastoreTypes, setDatastoreTypeId, resetField])

  return (
    <Fragment>
      { datastoreTypes.length > 1 &&
        <SelectInput
          label={T.translate('hosts_form.datastore_type') }
          placeholder={T.translate('hosts_form.placeholders.datastore_type') }
          value={datastoreTypeId}
          options={datastoreTypes}
          onChange={setDatastoreTypeId}
          validated={validated}
          isRequired={required}
          {...attrs}
        />
      }
    </Fragment>
  )
}

export default DatastoreTypeSelectInput
