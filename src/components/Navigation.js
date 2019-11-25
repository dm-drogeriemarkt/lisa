import React from 'react';
import T from 'i18n-react';
import { Link } from 'react-router-dom';
import { Col } from 'patternfly-react';

const Navigation = () => (
  <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} className='text-left'>
    <Link to='/'>{T.translate('navigation.dashboard')}</Link>
  </Col>
)

export default Navigation;
