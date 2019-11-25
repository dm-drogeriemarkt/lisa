import React from 'react';
import { shallow } from 'enzyme';
import Item from '../index';

describe('<Item />', () => {
  test('should render label and text', () => {
    const data = {
      label: 'os',
      text: 'RedHat 6.1'
    }
    const { label, text } = data;

    const wrapper = shallow(
      <Item label={label} text={text} />
    )

    expect(wrapper).toIncludeText(`${label}: ${text}`);
  })
});
