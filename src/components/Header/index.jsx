import React from 'react';
import { Link } from 'react-router-dom';
import {
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadContent
} from '@patternfly/react-core';
import Tools from './Tools';
import './index.scss';

const Header = (
  <Masthead>
    <MastheadMain>
      <MastheadBrand>
        <Link to='/'>LISA</Link>
      </MastheadBrand> 
    </MastheadMain>
    <MastheadContent>
      {<Tools />}
    </MastheadContent>
  </Masthead>
);

export default Header;
