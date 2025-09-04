import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  Toolbar,
  ToolbarContent, MenuToggle
} from '@patternfly/react-core';
import useUser from '../../hooks/useUser';
import avatarImg from '@patternfly/react-core/src/components/assets/avatarImg.svg';

const Tools = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { token, username, signOut } = useUser()

  const onToggle = (isOpen) => setIsOpen(isOpen);
  const onSelect = () => setIsOpen(false);

  const logoutAndRedirect = () => {
    signOut();
    navigate('/login');
  }

  const dropdownItems = [
    <DropdownItem key="logout" onClick={logoutAndRedirect}>Logout</DropdownItem>
  ];

  return (
    <Toolbar>
      <ToolbarContent>
        {token && <Dropdown
          onSelect={onSelect}
          toggle={
            <MenuToggle
              onToggle={(_event, isOpen) => onToggle(isOpen)}
              icon={<Avatar src={avatarImg} />} >
              {username}
            </MenuToggle>
          }
          isOpen={isOpen}
          dropdownItems={dropdownItems}
          isPlain
        />}
      </ToolbarContent>
    </Toolbar>
  );
};

export default Tools;
