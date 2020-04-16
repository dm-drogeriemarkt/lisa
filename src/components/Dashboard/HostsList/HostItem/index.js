import React from 'react';
import { Col, ListViewIcon, ListViewItem } from 'patternfly-react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader';
import InfoItem from './InfoItem';
import ActionsDropdown from './ActionsDropdown';
import { description } from 'helpers/hardware';
import { label as location_label } from 'helpers/location';
import { label as domain_label } from 'helpers/domain';
import './index.scss';

const HostItem = ({ host: { node: host } }) => (
  <ListViewItem id='dashboard-host-list'
    leftContent={ host.build ?
      (<Loader />) : (<ListViewIcon name='linux' />)}
    heading={<Link className='text-left' to={`/host/${host.id}`}>{host.name}</Link>}
    additionalInfo={[
      <Col key='location' xs={12} sm={2}>
        <InfoItem iconType='fa' iconClass='map-marker' description={location_label(host.location)} />
      </Col>,
      <Col key='os' xs={12} sm={2}>
        <InfoItem iconType='pf' iconClass='spinner' description={get(host, 'operatingsystem.name')} />
      </Col>,
      <Col key='hardware' xs={12} sm={6}>
        <InfoItem iconType='pf' iconClass='cluster' description={description(host.factValues.edges)} />
      </Col>,
      <Col key='environment' xs={12} sm={2}>
        <InfoItem iconType='fa' iconClass='sitemap' description={domain_label(host.domain)} />
      </Col>
    ]}
    actions={<ActionsDropdown host={host} />}
  />
)

export default HostItem;
