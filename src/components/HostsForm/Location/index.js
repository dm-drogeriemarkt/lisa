import React, { Component } from 'react';
import Default from 'components/HostsForm/Default';
import Custom from './Custom';

class Location extends Component {
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
      <div className='location'>
        { this.state.customView ? (
          <Custom />
        ) : (
          <Default name='location' enableCustomView={this.enableCustomView} />
        )}
      </div>
    )
  }
}

export default Location;
