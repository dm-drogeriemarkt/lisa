import React, { Fragment, useContext } from 'react'
import AppTierSelectInput from './AppTierSelectInput'
import DatastoreTypeSelectInput from './DatastoreTypeSelectInput'
import SubnetSelectInput from './SubnetSelectInput'
import OwnerSelectInput from './OwnerSelectInput'
import { HostsFormContext } from 'lib/Context'
import { pluginsExtensions } from 'plugins'

const Selects = () => {
  const context = useContext(HostsFormContext)

  let selects = [{
    attributeName: 'appTierName',
    component: AppTierSelectInput,
    onChange: context.updateAttribute
  }, {
    attributeName: 'subnetId',
    component: SubnetSelectInput,
    onChange: context.updateAttribute
  }, {
    attributeName: 'ownerId',
    component: OwnerSelectInput,
    onChange: context.updateAttribute
  }, {
    attributeName: 'datastoreType',
    component: DatastoreTypeSelectInput,
    onChange: context.updateAttribute
  }]

  pluginsExtensions.filter(({ slot }) => {
    return slot === 'HostsForm/ServerConfig/Selects'
  }).map(({ extension }) => {
    return extension({ selects, context })
  })

  return (
    <Fragment>
      { selects.map(({ component: Component, ...attrs }, i) => <Component key={i} {...attrs} />) }
    </Fragment>
  )
}

export default Selects
