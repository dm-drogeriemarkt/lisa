import React from 'react';
import T from 'i18n-react';
import { Button } from 'patternfly-react';
import { Link } from 'react-router-dom';
import HostsList from './HostsList';
import Notification from 'components/Notification';

const Dashboard = ({
  data: {
    hosts: {
      edges: hosts,
      totalCount
    }
  },
  page,
  search,
  updateAttribute
}) => {
  if(totalCount === 0 && !search) return (
    <Notification className='no-hosts'>
      <h1>{T.translate('dashboard.no_hosts_info')}</h1>
      <h3>{T.translate('dashboard.no_hosts_claim')}</h3>
      <Link to='/hosts-new'>
        <Button bsStyle='primary'>
          {T.translate('dashboard.toolbar.create_hosts')}
        </Button>
      </Link>
    </Notification>
  )

  return <HostsList hosts={hosts} totalCount={totalCount} page={page} updateAttribute={updateAttribute} />
}

export default Dashboard;
