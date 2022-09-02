import React from 'react';
import T from 'i18n-react';
import { Link } from 'react-router-dom';
import {
  Button,
  Toolbar as PatternflyToolbar,
  ToolbarGroup,
  ToolbarItem,
  ToolbarContent,
  SearchInput
} from '@patternfly/react-core';
import SortAlphaUpIcon from '@patternfly/react-icons/dist/esm/icons/sort-alpha-up-icon';
import SortAlphaDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-alpha-down-icon';

const NAME_FIELD = 'name';
const ASCENDING_SORT_DIRECTION = 'ASC';
const DESCENDING_SORT_DIRECTION = 'DESC';

const Toolbar = ({
  filterValue,
  updateParams,
  defaultSearch,
  defaultSortField,
  sortDirection
}) => {
  const isAscendingOrder = sortDirection === ASCENDING_SORT_DIRECTION

  const handleChangeSearch = (newValue) => {
    if (newValue) {
      updateParams({
        filterValue: newValue,
        search: `${NAME_FIELD} ~ "${newValue}"`,
        sortBy: NAME_FIELD
      });
    } else {
      updateParams({
        filterValue: newValue,
        search: defaultSearch,
        sortBy: defaultSortField
      });
    }
  }

  const handleChangeOrder = () => {
    const newSortDirection = isAscendingOrder ? DESCENDING_SORT_DIRECTION : ASCENDING_SORT_DIRECTION;
    updateParams({ sortDirection: newSortDirection });
  }

  return (
    <PatternflyToolbar id="toolbar-items">
      <ToolbarContent>
        <ToolbarItem variant="search-filter" className="pf-u-w-50">
          <SearchInput
            onChange={handleChangeSearch}
            value={filterValue}
            onClear={() => handleChangeSearch('')}
          />
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="plain" onClick={handleChangeOrder}>
            {isAscendingOrder ? <SortAlphaUpIcon /> : <SortAlphaDownIcon /> }
          </Button>
        </ToolbarItem>
        <ToolbarGroup variant="filter-group" alignment={{ default: 'alignRight' }}>
          <ToolbarItem>
            <Link to='/hosts-new'>
              <Button variant='primary'>
                {T.translate('dashboard.toolbar.create_hosts')}
              </Button>
            </Link>
          </ToolbarItem>
        </ToolbarGroup>
      </ToolbarContent>
    </PatternflyToolbar>
  )
}

export default Toolbar;
