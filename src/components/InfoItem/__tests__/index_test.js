import React from 'react';
import { shallow } from 'enzyme';

import InfoItem from 'components/InfoItem';
import { Icon } from 'patternfly-react';

describe('<InfoItem />', () => {
  const data = {
    iconType: 'fa',
    iconClass: 'map-marker',
    description: 'Rzeszów'
  };

  let wrapper;
  beforeEach(() => {
    const { iconType, iconClass, description } = data;
    wrapper = shallow(<InfoItem iconType={iconType} iconClass={iconClass} description={description} />);
  });

  it('renders description', () => {
    expect(wrapper).toIncludeText(data.description);
  });

  it('should render Icon', () => {
    expect(wrapper).toContainReact(<Icon type={data.iconType} name={data.iconClass} />);
  });
});
