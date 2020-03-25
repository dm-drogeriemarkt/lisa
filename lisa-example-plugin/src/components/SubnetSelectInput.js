import React, { useContext } from 'react'
import { HostsFormContext } from 'lib/Context'

const SubnetSelectInput = ({ components: [Component, components], ...attrs }) => {
  const { attributes: { modelId }} = useContext(HostsFormContext)
  const disabled = attrs.disabled || !!modelId

  return <Component components={components} {...attrs} disabled={disabled} />
}

export default SubnetSelectInput
