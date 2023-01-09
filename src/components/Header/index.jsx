import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@patternfly/react-core';
import Tools from './Tools';
import './index.scss';

const Header = (
  <PageHeader
    logo={<Link to='/'>LISA</Link>}
    logoComponent='div'
    headerTools={<Tools />}
  />
);

export default Header;
