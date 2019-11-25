import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from '../index';
import wait from 'waait';

const ASCENDING_SORT_DIRECTION = 'ASC';
const DESCENDING_SORT_DIRECTION = 'DESC';

describe('<Toolbar />', () => {
  const data = {
    search: '',
    sortBy: 'name',
    defaultSortField: DESCENDING_SORT_DIRECTION,
    sortDirection: DESCENDING_SORT_DIRECTION,
    filterValue: ''
  }
  const {search, sortBy, defaultSortField, sortDirection, filterValue } = data

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Toolbar
        search={search}
        sortBy={sortBy}
        defaultSortField={defaultSortField}
        sortDirection={sortDirection}
        filterValue={filterValue} />
    )
  });

  test('search hosts by name', async () => {
    const updateAttribute = jest.fn(() => {})
    const { mock: { calls: mockCalls } } = updateAttribute;
    wrapper.setProps({updateAttribute: updateAttribute})

    const searchInput = wrapper.find('FormControl[className="search"]');

    searchInput.simulate('change', { target: { value: 'host' } })
    expect(mockCalls.length).toBe(1);
    expect(mockCalls[0][0]).toEqual({ filterValue: 'host' });
    expect(mockCalls[0][1]).toBe(false); // do not refetch hosts yet
    wrapper.setProps({filterValue: 'host'})
    await wait(500);
    expect(mockCalls.length).toBe(2);
    expect(mockCalls[1][0]).toEqual({
      sortBy: 'name',
      search: 'name ~ "host"'
    }); // refetch hosts
  })

  test('change order direction', async () => {
    const updateAttribute = jest.fn(() => {})
    const { mock: { calls: mockCalls } } = updateAttribute;
    wrapper.setProps({updateAttribute: updateAttribute})

    const sortDirectionButton = wrapper.find('SortDirectionSelector');

    sortDirectionButton.simulate('click');
    expect(mockCalls.length).toBe(1);
    expect(mockCalls[0][0]).toEqual({sortDirection: ASCENDING_SORT_DIRECTION});
    wrapper.setProps({sortDirection: ASCENDING_SORT_DIRECTION})
    sortDirectionButton.simulate('click')
    expect(mockCalls.length).toBe(2);
    expect(mockCalls[1][0]).toEqual({sortDirection: DESCENDING_SORT_DIRECTION});
  })

  test('should render link to new host page', async () => {
    expect(wrapper.find('Link[to="/hosts-new"]')).toExist();
  })
});
