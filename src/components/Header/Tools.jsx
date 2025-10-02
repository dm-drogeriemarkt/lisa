import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar
} from '@patternfly/react-core';
import {
  Dropdown,
  DropdownItem,
  Toolbar,
  ToolbarItem
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
      {token && (
        <ToolbarItem>
          <Dropdown
            onSelect={onSelect}
            toggleText={
              <span className="pf-v5-c-avatar pf-v5-u-mr-sm">
                <Avatar src={avatarImg} />
                <span className="pf-v5-u-text">{username}</span>
              </span>
            }
            onToggle={(isOpen) => onToggle(isOpen)}
            isOpen={isOpen}
            dropdownItems={dropdownItems}
            isPlain
          />
        </ToolbarItem>
      )}
    </Toolbar>
  );
};

export default Tools;
