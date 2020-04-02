import React from 'react'
import Slot from 'components/Slot'
import AppTiers from './AppTiers'

const Descriptions = () => {
  const descriptions = [{
    attributeName: 'appTiers',
    components: [AppTiers]
  }]

  return (
    <Slot
      name='HostsForm/ServerConfig/Descriptions'
      elements={descriptions}
    />
  )
}

export default Descriptions
