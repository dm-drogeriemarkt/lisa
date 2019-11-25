import React from 'react';
import { shallow } from 'enzyme';
import Overview from '../index';

describe('<Overview />', () => {
  test('should render informations about the host', () => {
    const data = {
      operatingsystem: 'RedHat 6.1',
      ip: '42.38.17.86',
      ip6: '362e:e0a7:9811:ab21:f0ed:6b7a:db4a:a150'
    }
    const { operatingsystem, ip, ip6 } = data;

    const wrapper = shallow(
      <Overview operatingsystem={operatingsystem}
        ip={ip}
        ip6={ip6} />
    )

    expect(wrapper.find(`Item[label='host_details.overview.operatingsystem'][text='${operatingsystem}']`)).toExist();
    expect(wrapper.find(`Item[label='host_details.overview.ip'][text='${ip}']`)).toExist();
    expect(wrapper.find(`Item[label='host_details.overview.ip6'][text='${ip6}']`)).toExist();
  })
});
