import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  PageHeaderTools,
} from '@patternfly/react-core';
import useUser from '../../hooks/useUser';
import avatarImg from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';

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
            onToggle={onToggle}
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