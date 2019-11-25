import React from 'react';

const NavbarCollapse = ({ children }) => {
  return (
    <nav className="collapse navbar-collapse">
      <ul className="nav navbar-nav navbar-right navbar-iconic navbar-utility">
        { children }
      </ul>
    </nav>
  );
}

export default NavbarCollapse;
