import React, { useContext } from 'react'
import T from 'i18n-react'
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

  const label = T.translate('hosts_form.app_tier_name')
  const placeholder = T.translate('hosts_form.placeholders.app_tier_name')
  const appTiers = appTiersSettings.map(({ name }) => ({ id: name, name }))
  const handleChange = (appTierName) => {
    updateAttribute({ appTierName, subnetId: undefined });
  }

  return (
    <SelectInput
      label={label}
      placeholder={placeholder}
      value={appTierName}
      options={appTiers}
      onChange={handleChange}
      allowEmpty={true}
      {...attrs}
    />
  )
}

export default AppTierSelectInput
