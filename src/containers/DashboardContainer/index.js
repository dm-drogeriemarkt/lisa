import React, { Component } from 'react';
import { get } from 'lodash';
import T from 'i18n-react';
import { Query } from '@apollo/client/react/components';
import { Spinner } from 'patternfly-react';

import useUser from 'hooks/useUser'
import Notification from 'components/Notification';
import Toolbar from 'components/Dashboard/Toolbar';
import Dashboard from 'components/Dashboard';
import HOSTS_QUERY from 'graphql/queries/hosts';
import './index.scss';

const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = 10;
const DEFAULT_SORT_FIELD = 'created_at';
const DEFAULT_SORT_DIRECTION = 'DESC';
const DEFAULT_SEARCH = '';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: DEFAULT_PAGE,
      perPage: DEFAULT_PER_PAGE,
      sortBy: DEFAULT_SORT_FIELD,
      sortDirection: DEFAULT_SORT_DIRECTION,
      search: DEFAULT_SEARCH,
      filterValue: ''
    }
  }

  render() {
    const { page, perPage, sortBy, sortDirection, search, filterValue } = this.state;

    const token = get(this.props, 'user.token', null)

    return (
      <div>
        <h1 className='text-center dashboard-title'>{T.translate('dashboard.dashboard')}</h1>
        <Query
          query={HOSTS_QUERY}
          fetchPolicy='cache-and-network'
          variables={{
            first: page * perPage,
            last: perPage,
            sortBy,
            sortDirection,
            search
          }}
          context={{ token }}
        >
          {({ data, loading, error, refetch }) => {
            const updateAttribute = (attrs, refetchHosts = true) => {
              this.setState(attrs, () => {
                if(refetchHosts) refetch();
              })
            }

            const content = () => {
              if(loading) return (
                <Notification><Spinner loading /></Notification>
              )
              if(error) return (
                <Notification><h1>{T.translate('dashboard.error')}</h1></Notification>
              )
              return (
                <Dashboard data={data}
                  updateAttribute={updateAttribute}
                  page={page}
                  search={search}
                />
              )
            }

            return (
              <div>
                <Toolbar
                  search={search}
                  sortBy={sortBy}
                  defaultSortField={DEFAULT_SORT_FIELD}
                  sortDirection={sortDirection}
                  filterValue={filterValue}
                  updateAttribute={updateAttribute}
                />

                { content() }
              </div>
            )
          }}
        </Query>
      </div>
    );
  }
}

// TODO: refactor DashboardContainer to function component
const DashboardContainerWithUser = (props) => {
  const user = useUser();

  return (
    <DashboardContainer user={user} {...props} />
  )
}

export default DashboardContainerWithUser;
