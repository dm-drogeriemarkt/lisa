import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DataListItemRow,
  DataListItemCells,
  DataListCell,
  DataListAction,
  Spinner
} from '@patternfly/react-core';
import {
  Dropdown,
  DropdownItem
} from '@patternfly/react-core';
import T from 'i18n-react';
import { get } from 'lodash';
import { description } from '../../../helpers/hardware';
import { label as location_label } from '../../../helpers/location';
import { label as domain_label } from '../../../helpers/domain';

import LinuxIcon from '@patternfly/react-icons/dist/js/icons/linux-icon';
import MapMarkerAltIcon from '@patternfly/react-icons/dist/js/icons/map-marker-alt-icon';
import WhmcsIcon from '@patternfly/react-icons/dist/js/icons/whmcs-icon';
import ClusterIcon from '@patternfly/react-icons/dist/js/icons/cluster-icon';
import SitemapIcon from '@patternfly/react-icons/dist/js/icons/sitemap-icon';

const HostItem = ({
  host
}) => {
  const [isActionDropdownOpen, setIsActionDropdownOpen] = useState(false);
  const onToggle = () => setIsActionDropdownOpen(!isActionDropdownOpen);

  const dataListCells = [
    <DataListCell key="icon" width={1}>
      {host.build ? <Spinner  size="lg" /> : <LinuxIcon size="lg" />}
    </DataListCell>,
    <DataListCell key="name" width={5}>
      <Link to={`/host/${host.id}`}>{host.name}</Link>
    </DataListCell>,
    <DataListCell key="location" width={4}>
      <MapMarkerAltIcon size="md" className='pf-v5-u-mr-sm' />
      {location_label(host.location)}
    </DataListCell>,
    <DataListCell key="os" width={4}>
      <WhmcsIcon size="md" className='pf-v5-u-mr-sm' />
      {get(host, 'operatingsystem.name')}
    </DataListCell>,
    <DataListCell key="facts" width={4}>
      <ClusterIcon size="md" className='pf-v5-u-mr-sm' />
      {description(host.factValues.edges)}
    </DataListCell>,
    <DataListCell key="domain" width={4} className="pf-v5-u-display-inline">
      <SitemapIcon size="md" className='pf-v5-u-mr-sm' />
      {domain_label(host.domain)}
    </DataListCell>
  ]

  const dropdownItems = [
    <DropdownItem key="foreman-link" href={`${import.meta.env.REACT_APP_FOREMAN_URL}${host.path}`} target='_blank'>{T.translate('dashboard.hosts_list.foreman_link')}</DropdownItem>,
  ]

  return (
    <DataListItemRow>
      <DataListItemCells
        dataListCells={dataListCells}
      />
      <DataListAction
        isPlainButtonAction
      >
        <Dropdown
          dropdownItems={dropdownItems}
          toggle={{ onToggle }}
          isOpen={isActionDropdownOpen}
          isPlain
        />
      </DataListAction>
    </DataListItemRow>
  )
}

export default HostItem;
