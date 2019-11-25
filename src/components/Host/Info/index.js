import React from 'react';
import { Row, Col } from 'patternfly-react';
import InfoItem from 'components/InfoItem';
import LocationItem from './LocationItem';
import './index.scss';

const Info = ({
  name,
  location,
  domain,
  operatingsystem,
  hardware,
  ...rest
}) => (
  <div {...rest}>
    <Row>
      <h1 className='host-name'>
        <InfoItem iconType='fa' iconClass='linux' description={name} />
      </h1>
    </Row>
    <Row>
      <Col key='location' xs={12} sm={3}>
        <LocationItem location={location} className='font-weight-bold' />
      </Col>
      <Col key='environment' xs={12} sm={3}>
        <InfoItem iconType='fa' iconClass='sitemap' description={domain} className='font-weight-bold' />
      </Col>
      <Col key='os' xs={12} sm={3}>
        <InfoItem iconType='pf' iconClass='spinner' description={operatingsystem} className='font-weight-bold' />
      </Col>
      <Col key='hardware' xs={12} sm={3}>
        <InfoItem iconType='pf' iconClass='cluster' description={hardware} className='font-weight-bold' />
      </Col>
    </Row>
  </div>
)

export default Info;
