import React, { Component} from 'react';
import SelectInput from 'components/HostsForm/SelectInput';

import { appTiers } from 'settings'
import { HostsFormContext } from 'lib/Context'

class Selects extends Component {
  static contextType = HostsFormContext

  updateAppTierName = ({ appTierName }) => {
    const subnetId = undefined;

    this.context.updateAttribute({ appTierName, subnetId });
  }

  get appTiers() {
    return appTiers.map(({ name, ...rest }) => ({ id: name, name, ...rest }))
  }

  render() {
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
    } = this.context;

    return (
      <div>
        <SelectInput
          attributeName='appTierName'
          value={appTierName}
          updateAttribute={this.updateAppTierName}
          options={this.appTiers}
        />

        <SelectInput
          attributeName='subnetId'
          value={subnetId}
          options={subnets}
          loading={subnetsAreLoading}
          disabled={!appTierName}
          updateAttribute={updateAttribute}
        />

        { datastoreTypes.length > 1 &&
          <SelectInput
            attributeName='datastoreType'
            value={datastoreType}
            updateAttribute={updateAttribute}
            options={datastoreTypes}
          />
        }

        { owners.length > 1 &&
          <SelectInput
            attributeName='ownerId'
            value={ownerId}
            updateAttribute={updateAttribute}
            options={owners}
          />
        }
      </div>
    )
  }
}

export default Selects;
