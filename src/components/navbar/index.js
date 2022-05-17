import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Icon, Dropdown, MenuItem, Grid } from 'patternfly-react';
import NavbarCollapse from './NavbarCollapse';
import T from 'i18n-react';
import './index.css';
import useUser from 'hooks/useUser'

const Navbar = () => {
  const navigate = useNavigate();
  const { username, token, signOut } = useUser()

  const logoutAndRedirect = () => {
    signOut();
    navigate('/login');
  }

  if (token) {
    return (
      <nav className='navbar navbar-pf-vertical'>
        <Grid>
          <Link className='logo' to='/' />
          <NavbarCollapse>
            <Dropdown componentClass='li' id='user'>
              <Dropdown.Toggle useAnchor className='nav-item-iconic'>
                <Icon type='pf' name='user' /> {username}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <MenuItem onClick={logoutAndRedirect}>
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

export default Navbar;
