import React from 'react';
import { Link } from 'react-router-dom';
import {
  Masthead, MastheadMain, MastheadBrand, MastheadContent
} from '@patternfly/react-core';
import Tools from './Tools';
import './index.scss';

const Header = (
  <Masthead>
    <MastheadMain>
      <MastheadBrand logo={<Link to='/'>LISA</Link>} logoComponent='div' />
    </MastheadMain>
    <MastheadContent>
      <Tools />
    </MastheadContent>
  </Masthead>
);

export default Header;
