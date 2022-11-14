import React from 'react';
import T from 'i18n-react';
import { Button } from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import HostsList from './HostsList';
import Notification from '../Notification';

const Dashboard = ({
  data: {
    hosts: {
      edges: hosts,
      totalCount
    }
  } = {},
  page,
  perPage,
  search,
  updateParams
}) => {
  if(totalCount === 0 && !search) return (
    <Notification className='no-hosts'>
      <h1>{T.translate('dashboard.no_hosts_info')}</h1>
      <h3>{T.translate('dashboard.no_hosts_claim')}</h3>
      <Link to='/hosts-new'>
        <Button variant='primary'>
          {T.translate('dashboard.toolbar.create_hosts')}
        </Button>
      </Link>
    </Notification>
  )

  return (
    <HostsList
      hosts={hosts}
      totalCount={totalCount}
      page={page}
      perPage={perPage}
      updateParams={updateParams}
    />
  )
}

export default Dashboard;
