import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'patternfly-react';
import NavbarCollapse from './NavbarCollapse';
import { isAuthenticated, getUsername, logout } from 'lib/Auth';
import { Icon, Dropdown, MenuItem } from 'patternfly-react';
import T from 'i18n-react';
import './index.css';

class Navbar extends Component {
  logoutAndRedirect = () => {
    logout();
    this.props.history.push('/login');
  }

  render() {
    if (isAuthenticated()) {
      return (
        <nav className='navbar navbar-pf-vertical'>
          <Grid>
            <Link className='logo' to='/' />
            <NavbarCollapse>
              <Dropdown componentClass='li' id='user'>
                <Dropdown.Toggle useAnchor className='nav-item-iconic'>
                  <Icon type='pf' name='user' /> {getUsername()}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <MenuItem onClick={this.logoutAndRedirect}>
                    {T.translate('login.logout')}
                  </MenuItem>
                </Dropdown.Menu>
              </Dropdown>
            </NavbarCollapse>
          </Grid>
        </nav>
      )
    }
    return (
      <div>
        <nav className='navbar navbar-pf-vertical'/>
      </div>
    )
  }
}

export default Navbar;
