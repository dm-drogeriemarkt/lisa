import React from 'react';
import { shallow } from 'enzyme';
import Item from '../index';

describe('<Item />', () => {
  const children = (<p>children</p>)

  test('render items container', () => {
    const wrapper = shallow(
      <Item className='container'>{children}</Item>
    )

    expect(wrapper).toHaveClassName('hosts-list-toolbar-container');
    expect(wrapper.children()).toMatchElement(children);
  })

  test('render item', () => {
    const wrapper = shallow(
      <Item>{children}</Item>
    )

    expect(wrapper).toHaveClassName('hosts-list-toolbar-item');
    expect(wrapper.children()).toMatchElement(children);
  })
});
