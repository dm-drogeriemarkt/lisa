import React from 'react';
import { shallow } from 'enzyme';
import Info from '../index';

describe('<Info />', () => {
  test('should render informations about the host', () => {
    const data = {
      name: 'host.development.example.com',
      domain: 'development',
      hardware: '2 CPUs, 1GB RAM, 11.55GB HD',
      operatingsystem: 'RedHat',
      location: {
        country: 'pl',
        name: 'Rzeszów'
      }
    }
    const { name, domain, hardware, operatingsystem, location } = data;

    const wrapper = shallow(
      <Info name={name}
        location={location}
        domain={domain}
        operatingsystem={operatingsystem}
        hardware={hardware} />
    )

    expect(wrapper.find(`InfoItem[description='${name}']`)).toExist();
    expect(wrapper.find(`InfoItem[description='${domain}']`)).toExist();
    expect(wrapper.find(`InfoItem[description='${hardware}']`)).toExist();
    expect(wrapper.find(`InfoItem[description='${operatingsystem}']`)).toExist();
    expect(wrapper.find('LocationItem')).toExist();
    expect(wrapper.find('LocationItem')).toHaveProp({ location })
  })
});
