import React, { useContext } from 'react'
import { HostsFormContext } from 'lib/Context'
import SelectInput from 'components/HostsForm/SelectInput'
import { appTiers as appTiersSettings } from 'settings'

const AppTierSelectInput = ({...attrs}) => {
  const {
    updateAttribute,
    attributes: {
      appTierName
    }
  } = useContext(HostsFormContext)

  const appTiers = appTiersSettings.map(({ name }) => ({ id: name, name }))
  const handleChange = ({ appTierName }) => {
    updateAttribute({ appTierName, subnetId: undefined });
  }

  return (
    <SelectInput value={appTierName} options={appTiers} onChange={handleChange} allowEmpty={true} {...attrs} />
  )
}

export default AppTierSelectInput
