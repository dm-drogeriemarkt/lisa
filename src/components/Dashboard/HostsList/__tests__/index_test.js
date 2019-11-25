import React from 'react';
import { shallow } from 'enzyme';
import HostsList from '../index';

describe('<HostsList />', () => {
  const data = {
    hosts: [
      { id: 1 },
      { id: 2 }
    ],
    totalCount: 2,
    page: 1,
    updateAttribute: () => {}
  }
  const { hosts, totalCount, page, updateAttribute } = data;

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <HostsList hosts={hosts}
        totalCount={totalCount}
        page={page}
        updateAttribute={updateAttribute} />
    )
  });

  it('should render Pagination', () => {
    const upPagination = wrapper.find('Pagination[className="up-pagination"]');
    const downPagination = wrapper.find('Pagination[className="down-pagination"]');
    const expectedProps = {
      page: page,
      totalCount: totalCount,
      updateAttribute: updateAttribute
    }

    expect(upPagination).toExist();
    expect(upPagination).toHaveProp(expectedProps);
    expect(downPagination).toExist();
    expect(downPagination).toHaveProp(expectedProps);
  })

  it('should render host items', () => {
    expect(wrapper.find('HostItem').length).toEqual(hosts.length);
    hosts.map((item, index) => {
      expect(wrapper.find('HostItem').at(index)).toHaveProp({ host: item })
    })
  })
});
