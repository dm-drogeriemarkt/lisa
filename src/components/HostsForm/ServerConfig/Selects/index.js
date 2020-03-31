import React from 'react'
import Slot from 'components/Slot'
import AppTierSelectInput from './AppTierSelectInput'
import DatastoreTypeSelectInput from './DatastoreTypeSelectInput'
import SubnetSelectInput from './SubnetSelectInput'
import OwnerSelectInput from './OwnerSelectInput'

const Selects = () => {
  const selects = [{
    attributeName: 'appTierName',
    components: [AppTierSelectInput]
  }, {
    attributeName: 'subnetId',
    components: [SubnetSelectInput]
  }, {
    attributeName: 'ownerId',
    components: [OwnerSelectInput]
  }, {
    attributeName: 'datastoreType',
    components: [DatastoreTypeSelectInput]
  }]

  return <Slot name='HostsForm/ServerConfig/Selects' elements={selects} />
}

export default Selects
