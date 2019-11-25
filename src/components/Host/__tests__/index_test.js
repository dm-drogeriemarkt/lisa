import React from 'react';
import { shallow } from 'enzyme';
import Host from 'components/Host';
import HOST_QUERY_MOCK from 'graphql/queries/__mocks__/host_mock'

describe('<Host />', () => {
  const { result: { data }} = HOST_QUERY_MOCK

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Host data={data} />);
  });

  it('should render Info component', () => {
    const element = wrapper.find('Info')

    expect(element).toExist(); 
    expect(element).toHaveProp({
      name: 'host.example.com',
      location: {
        name: 'Rzeszów',
        country: null
      },
      domain: 'development',
      operatingsystem: 'RedHat',
      hardware: '2 hardware.cpu_plural, 1GB hardware.memory, 11.55GB hardware.disk'
    });
  });

  it('should render Overview component', () => {
    const element = wrapper.find('Overview')

    expect(element).toExist();
    expect(element).toHaveProp({
      operatingsystem: 'RedHat 6.1',
      ip: '42.38.17.86',
      ip6: '362e:e0a7:9811:ab21:f0ed:6b7a:db4a:a150'
    });
  });
});


