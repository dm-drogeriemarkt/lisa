import React from 'react';
import T from 'i18n-react';
import { Row, Card, Col } from 'patternfly-react';
import Item from './Item';
import './index.css';

const Overview = ({ip, ip6, operatingsystem}) => (
  <Card id='overview'>
    <Row className='text-left'>
      <Col xs={12}>
        <h3 className='font-weight-bold'>{T.translate('host_details.overview.header')}</h3>
      </Col>
      <Col xs={12} sm={6}>
        <Item label={T.translate('host_details.overview.ip')} text={ip || T.translate('host_details.overview.not_assigned')} />
        <Item label={T.translate('host_details.overview.ip6')} text={ip6 || T.translate('host_details.overview.not_assigned')} />
      </Col>
      <Col xs={12} sm={6}>
        <Item label={T.translate('host_details.overview.operatingsystem')} text={operatingsystem} />
      </Col>
    </Row>
  </Card>
)

export default Overview;
