import React, { useContext } from 'react'
import { HostsFormContext } from 'lib/Context'
import SelectInput from 'components/HostsForm/SelectInput'
import { appTiers as appTiersSettings } from 'settings'

const AppTierSelectInput = ({ onChange, ...attrs }) => {
  const {
    attributes: {
      appTierName
    }
  } = useContext(HostsFormContext)

  const appTiers = appTiersSettings.map(({ name }) => ({ id: name, name }))
  const handleChange = ({ appTierName }) => {
    onChange({ appTierName, subnetId: undefined });
  }

  return (
    <SelectInput value={appTierName} options={appTiers} onChange={handleChange} {...attrs} />
  )
}

export default AppTierSelectInput
