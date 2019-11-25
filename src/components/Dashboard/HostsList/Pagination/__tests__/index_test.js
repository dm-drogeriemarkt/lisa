import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../index';

describe('<Pagination />', () => {
  const data = {
    page: 1,
    totalCount: 15,
    updateAttribute: jest.fn(() => {})
  }
  const { page, totalCount, updateAttribute } = data;

  it('should call updateAttribute when the page is changed', () => {
    const wrapper = shallow(
      <Pagination page={page}
        totalCount={totalCount}
        updateAttribute={updateAttribute} />
    );

    wrapper.find('Pagination').simulate('change');
    expect(updateAttribute.mock.calls.length).toBe(1);
  })
});
