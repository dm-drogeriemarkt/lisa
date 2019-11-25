import React from 'react';
import { shallow } from 'enzyme';
import InfoItem from '../InfoItem';

describe('<HostItem />', () => {
  const data = {
    iconType: 'fa',
    iconClass: 'map-marker',
    description: 'Rzeszów'
  }
  const { iconType, iconClass, description } = data;

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <InfoItem iconType={iconType} iconClass={iconClass} description={description} />
    ).find('InfoItem').shallow();
  });

  it('should render icon', () => {
    const Icon = wrapper.find('Icon')

    expect(Icon).toExist();
    expect(Icon).toHaveProp({type: iconType, name: iconClass});

  })

  it('should render description', () => {
    expect(wrapper).toIncludeText(description);
  })
});
