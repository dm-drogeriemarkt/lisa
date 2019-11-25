import React from 'react';
import T from 'i18n-react';
import { DropdownKebab, MenuItem } from 'patternfly-react';

const ActionsDropdown = ({ host: { id, path} }) => (
  <DropdownKebab id={`host-${id}-actions`} pullRight={true}>
    { /* eslint-disable-next-line no-undef */ }
    <MenuItem href={`${process.env.REACT_APP_FOREMAN_URL}${path}`} target='_blank'>
      {T.translate('dashboard.hosts_list.foreman_link')}
    </MenuItem>
  </DropdownKebab>
)

export default ActionsDropdown;
