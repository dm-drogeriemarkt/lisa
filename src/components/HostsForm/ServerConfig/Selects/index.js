import React from 'react'
import Slot from 'components/Slot'
import AppTierSelectInput from './AppTierSelectInput'
import DatastoreTypeSelectInput from './DatastoreTypeSelectInput'
import SubnetSelectInput from './SubnetSelectInput'
import OwnerSelectInput from './OwnerSelectInput'

const Selects = () => {
  const selects = [{
    name: 'appTierName',
    components: [AppTierSelectInput]
  }, {
    name: 'subnetId',
    components: [SubnetSelectInput]
  }, {
    name: 'ownerId',
    components: [OwnerSelectInput]
  }, {
    name: 'datastoreTypeId',
    components: [DatastoreTypeSelectInput]
  }]

  return <Slot name='HostsForm/ServerConfig/Selects' elements={selects} />
}

export default Selects
