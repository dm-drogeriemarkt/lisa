import React from 'react';
import T from 'i18n-react';
import Preset from './Preset';
import Manual from './Manual';
import { Tabs, Tab } from 'patternfly-react';
import './index.css';

import { formSettings } from 'settings'

const Resources = () => (
  <div className="resources">
    <h3>{T.translate('hosts_form.resources.header')}</h3>
    { formSettings.presetResources.length ? (
      <React.Fragment>
        <p>{T.translate('hosts_form.resources.description')}</p>
        <Tabs defaultActiveKey={1} id="resources-tabs">
          <Tab eventKey={1} title="Preset">
            <Preset />
          </Tab>
          <Tab eventKey={2} title="Manual">
            <Manual />
          </Tab>
        </Tabs>
      </React.Fragment>
    ) : (
      <Manual />
    )}
  </div>
)

export default Resources
