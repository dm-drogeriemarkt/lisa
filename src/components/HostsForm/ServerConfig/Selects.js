import React, { Fragment, useContext } from 'react';
import SelectInput from 'components/HostsForm/SelectInput';
import { appTiers as appTiersSettings } from 'settings'
import { HostsFormContext } from 'lib/Context'
import { pluginsExtensions } from 'plugins'

const Selects = () => {
  const context = useContext(HostsFormContext)

  const {
    attributes: {
      appTierName,
      datastoreType,
      ownerId,
      subnetId
    },
    currentLocation: {
      datastoreTypes = []
    },
    owners=[],
    subnets=[],
    subnetsAreLoading,
    updateAttribute
  } = context

  const updateAppTierName = ({ appTierName }) => {
    updateAttribute({ appTierName, subnetId: undefined });
  }

  const appTiers = () => {
    return appTiersSettings.map(({ name, ...rest }) => ({ id: name, name, ...rest }))
  }

  let selects = [{
    attributeName: 'appTierName',
    value: appTierName,
    updateAttribute: updateAppTierName,
    options: appTiers()
  }, {
    attributeName: 'subnetId',
    value: subnetId,
    options: subnets,
    updateAttribute: updateAttribute,
    loading: subnetsAreLoading,
    disabled: !appTierName,
  }]

  if(datastoreTypes.length > 1) {
    selects.push({
      attributeName: 'datastoreType',
      value: datastoreType,
      updateAttribute: updateAttribute,
      options: datastoreTypes
    })
  }

  if(owners.length > 1) {
    selects.push({
      attributeName: 'ownerId',
      value: ownerId,
      updateAttribute: updateAttribute,
      options: owners
    })
  }

  pluginsExtensions.filter(({ slot }) => {
    return slot === 'HostsForm/ServerConfig/Selects'
  }).map(({ extension }) => {
    return extension({ selects, context })
  })

  return (
    <Fragment>
      { selects.map(({ ...attrs }, i) => <SelectInput key={i} {...attrs} />) }
    </Fragment>
  )
}

export default Selects
