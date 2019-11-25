import React, { Component } from 'react';
import Default from 'components/HostsForm/Default';
import Custom from './Custom'

import { HostsFormContext } from 'lib/Context'

class PuppetConfig extends Component {
  static contextType = HostsFormContext

  constructor(props) {
    super(props);

    this.state = {
      customView: false
    };
  }

  enableCustomView = () => {
    this.setState({ customView: true })
  }

  render() {
    return (
      <div>
        { this.state.customView ? (
          <Custom />
        ) : (
          <Default name='puppet_config' enableCustomView={this.enableCustomView}
          />
        )}
      </div>
    )
  }
}

export default PuppetConfig;
