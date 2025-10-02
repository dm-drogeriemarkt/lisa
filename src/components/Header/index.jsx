import React from 'react';
import { Link } from 'react-router-dom';
import {
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadToggle
} from '@patternfly/react-core';
import Tools from './Tools';
import './index.scss';

const Header = (
  <Masthead>
    <MastheadMain>
      <MastheadBrand>
        <Link to='/'>LISA</Link>
      </MastheadBrand>
      
      <MastheadToggle>
        <Tools />
      </MastheadToggle>
    </MastheadMain>
  </Masthead>
);

export default Header;
