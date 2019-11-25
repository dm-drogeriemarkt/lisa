import React from 'react';
import T from 'i18n-react';
import { Row, Col } from 'patternfly-react';
import ProjectDetails from './ProjectDetails';
import HostsNames from './HostsNames';
import './index.css';

const HostsCreation = () => (
  <div>
    <h3>{T.translate('hosts_form.hosts_creation.header')}</h3>
    <p>{T.translate('hosts_form.hosts_creation.description')}</p>
    <Row>
      <Col xs={12} sm={6}>
        <ProjectDetails />
      </Col>
      <Col xs={12} sm={6}>
        <HostsNames />
      </Col>
    </Row>
  </div>
)

export default HostsCreation;
