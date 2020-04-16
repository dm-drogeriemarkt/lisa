import React from 'react'
import Slot from 'components/Slot'
import AppTiers from './AppTiers'

const Descriptions = () => {
  const descriptions = [{
    id: 'appTiers',
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
