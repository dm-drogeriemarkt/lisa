import React, { Fragment, useContext, useEffect } from 'react'
import T from 'i18n-react'
import { HostsFormContext } from 'lib/Context'
import SelectInput from 'components/HostsForm/SelectInput'

const DatastoreTypeSelectInput = ({ ...attrs }) => {
  const {
    updateAttribute,
    attributes: {
      datastoreTypeId
    },
    currentLocation: {
      datastoreTypes = []
    }
  } = useContext(HostsFormContext)

  useEffect(() => {
    if(datastoreTypes.length === 1) {
      updateAttribute({ datastoreTypeId: datastoreTypes[0].id })
    }
  }, [updateAttribute, datastoreTypes])

  const label = T.translate('hosts_form.datastore_type')
  const placeholder = T.translate('hosts_form.placeholders.datastore_type')
  const handleChange = (datastoreTypeId) => {
    updateAttribute({ datastoreTypeId })
  }

  return (
    <Fragment>
      { datastoreTypes.length > 1 &&
        <SelectInput
          label={label}
          placeholder={placeholder}
          value={datastoreTypeId}
          options={datastoreTypes}
          onChange={handleChange}
          {...attrs}
        />
      }
    </Fragment>
  )
}

export default DatastoreTypeSelectInput
