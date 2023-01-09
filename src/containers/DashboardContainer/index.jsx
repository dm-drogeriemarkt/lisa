import React, { Fragment, useState } from 'react';
import T from 'i18n-react';
import { useQuery } from '@apollo/client';
import { useDebounce } from 'react-use';
import {
  Spinner,
  TextContent,
  Text,
  TextVariants,
} from '@patternfly/react-core';

import useUser from '../../hooks/useUser'
import Notification from '../../components/Notification';
import Toolbar from '../../components/Dashboard/Toolbar';
import Dashboard from '../../components/Dashboard';
import HOSTS_QUERY from '../../graphql/queries/hosts';

const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = 10;
const DEFAULT_SORT_FIELD = 'created_at';
const DEFAULT_SORT_DIRECTION = 'DESC';
const DEFAULT_SEARCH = '';

const WAIT_INTERVAL = 500;

const DashboardContainer = () => {
  const { token } = useUser();
  const [params, setParams] = useState({
    page: DEFAULT_PAGE,
    perPage: DEFAULT_PER_PAGE,
    sortBy: DEFAULT_SORT_FIELD,
    sortDirection: DEFAULT_SORT_DIRECTION,
    search: DEFAULT_SEARCH,
    filterValue: ''
  });

  const { search, filterValue, page, perPage, sortBy, sortDirection } = params;
  const [debouncedSearch, setDebouncedSearch] = useState(DEFAULT_SEARCH);
  useDebounce(() => setDebouncedSearch(search), WAIT_INTERVAL, [search]);

  const { data, loading, error } = useQuery(HOSTS_QUERY, {
    variables: {
      first: page * perPage,
      last: perPage,
      sortBy,
      sortDirection,
      search: debouncedSearch
    },
    context: { token },
    fetchPolicy: 'cache-and-network'
  })

  const updateParams = (newParams) => setParams({ ...params, ...newParams })

  const content = () => {
    if (loading) return (
      <Notification><Spinner /></Notification>
    )
    if (error) return (
      <Notification><h1>{T.translate('dashboard.error')}</h1></Notification>
    )
    return (
      <Dashboard
        data={data}
        updateParams={updateParams}
        page={params.page}
        perPage={params.perPage}
        search={search}
      />
    )
  }

  return (
    <Fragment>
      <TextContent>
        <Text component={TextVariants.h1} className="pf-u-text-align-center">
          {T.translate('dashboard.dashboard')}
        </Text>
      </TextContent>

      <Toolbar
        search={search}
        sortBy={params.sortBy}
        defaultSortField={DEFAULT_SORT_FIELD}
        sortDirection={params.sortDirection}
        filterValue={filterValue}
        updateParams={updateParams}
      />

      { content() }
    </Fragment>
  )
}

export default DashboardContainer;
