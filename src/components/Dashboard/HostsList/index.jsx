import React, { Fragment } from 'react';
import T from 'i18n-react';

import HostItem from './HostItem';
import Notification from '../../Notification';

import { Pagination as PatternflyPagination, DataList, DataListItem } from '@patternfly/react-core';

const HostsList = ({
  hosts,
  totalCount,
  page,
  perPage,
  updateParams
}) => {
  const Pagination = () => (
    <PatternflyPagination
      itemCount={totalCount}
      perPage={perPage}
      onPerPageSelect={(_evt, newPerPage, newPage) => updateParams({ perPage: newPerPage, page: newPage })}
      page={page}
      onSetPage={(_evt, newPage) => updateParams({ page: newPage  }) }
      widgetId="pagination-options-menu-top"
      isCompact
    />
  )

  return totalCount === 0 ? (
    <Notification>
      <h1>{T.translate('dashboard.no_hosts_search_info')}</h1>
    </Notification>
  ) : (
    <Fragment>
      <Pagination />
      <DataList>
        {hosts.map(({ node: host }, index) => (
          <DataListItem key={index}>
            <HostItem host={host} />
          </DataListItem>
        ))}
      </DataList>
      <Pagination />
    </Fragment>
  )
}

export default HostsList;
