import React from 'react';
import T from 'i18n-react';
import { Row, Col } from 'patternfly-react';
import Descriptions from './Descriptions';
import Selects from './Selects';
import './index.css'

const ServerConfig = () => (
  <div>
    <h3>{T.translate('hosts_form.server_config.header')}</h3>
    <Row>
      <Col xs={12} sm={6}>
        <Selects />
      </Col>
      <Col xs={12} sm={6}>
        <Descriptions />
      </Col>
    </Row>
  </div>
)

export default ServerConfig;
