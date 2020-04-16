import React, { useContext } from 'react'
import { HostsFormContext } from 'lib/Context'

const SubnetSelectInput = ({ components: [Component, components], ...attrs }) => {
  const { attributes: { modelId }} = useContext(HostsFormContext)
  const disabled = attrs.disabled || !!modelId
  const placeholder = disabled && modelId ? 'From model' : attrs.placeholder

  return <Component components={components} {...attrs} placeholder={placeholder} disabled={disabled} />
}

export default SubnetSelectInput
