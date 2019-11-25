import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../index';

describe('<Loader />', () => {
  test('render component', () => {
    const wrapper = shallow(<Loader />)

    expect(wrapper).toHaveClassName('loader');
  })
});
