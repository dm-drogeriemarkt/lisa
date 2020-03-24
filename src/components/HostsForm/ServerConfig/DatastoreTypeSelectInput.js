import React, { Fragment, useContext, useEffect } from 'react'
import { HostsFormContext } from 'lib/Context'
import SelectInput from 'components/HostsForm/SelectInput'

const DatastoreTypeSelectInput = ({ onChange: handleChange, ...attrs }) => {
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

  return (
    <Fragment>
      { datastoreTypes.length > 1 &&
          <SelectInput
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
