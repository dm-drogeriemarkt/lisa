import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  ToolbarContent,
  ToolbarGroup
} from '@patternfly/react-core';
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle,
  Toolbar,
  ToolbarItem
} from '@patternfly/react-core';
import useUser from '../../hooks/useUser';
import avatarImg from '@patternfly/react-core/src/components/assets/avatarImg.svg';

const Tools = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { token, username, signOut } = useUser()

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };
  const onSelect = () => setIsOpen(false);

  const logoutAndRedirect = () => {
    signOut();
    navigate('/login');
  }

  const dropdownItems = [
    <DropdownItem key="logout" onClick={logoutAndRedirect}>Logout</DropdownItem>
  ];

  return (
    <Toolbar id="toolbar-items">
      <ToolbarContent>
        <ToolbarGroup variant="filter-group" align={{ default: 'alignRight' }}>
          {token &&( 
          <ToolbarItem>
            <Dropdown
              onSelect={onSelect}
              toggle={ toggleRef =><MenuToggle ref={toggleRef} isExpanded={isOpen} variant="plainText" onClick={onToggleClick} icon={<Avatar src={avatarImg} />}>
                {username}
              </MenuToggle>
              }
              isOpen={isOpen}
            >
              <DropdownList>{dropdownItems}</DropdownList>
            </Dropdown>
          </ToolbarItem>
          )}
        </ToolbarGroup>
      </ToolbarContent>
    </Toolbar>
  );
};

export default Tools;
