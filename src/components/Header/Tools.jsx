import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar
} from '@patternfly/react-core';
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  PageHeaderTools
} from '@patternfly/react-core/deprecated';
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
    <PageHeaderTools>
      {token && <Dropdown
        onSelect={onSelect}
        toggle={
          <DropdownToggle
            onToggle={(_event, isOpen) => onToggle(isOpen)}
            icon={<Avatar src={avatarImg} />}
          >
            {username}
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
        isPlain
      />}
    </PageHeaderTools>
  );
};

export default Tools;
