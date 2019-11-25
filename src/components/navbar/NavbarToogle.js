import React from 'react';

const NavbarToogle = () => {
  return (
    <div className="navbar-header">
      <button type="button" className="navbar-toggle">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>
  );
}

export default NavbarToogle;
