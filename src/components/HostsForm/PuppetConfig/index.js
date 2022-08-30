import React, { useState } from 'react';
import Default from 'components/HostsForm/Default';
import Custom from './Custom'

const PuppetConfig = () => {
  const [customView, setCustomView] = useState(false);
  const enableCustomView = () => setCustomView(true);

  if(customView) {
    return <Custom />
  } else {
    return <Default name='puppet_config' enableCustomView={enableCustomView} />
  }
}

export default PuppetConfig;
