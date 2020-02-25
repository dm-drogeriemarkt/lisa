import React from 'react';
import { shallow } from 'enzyme';
import HostItem from '../index';
import HOSTS_QUERY_MOCK from 'graphql/queries/__mocks__/hosts_mock'

describe('<HostItem />', () => {
  const { result: { data: { hosts: { edges: [ host ]}}}} = HOSTS_QUERY_MOCK[0]

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <HostItem key={0} host={host} />
    ).find('ListViewItem').shallow().find('ListViewRow').shallow();
  });

  it('should render link to host details page', () => {
    const { node: { id, name }} = host
    const Link = wrapper.find('Link');

    expect(Link).toExist();
    expect(Link).toHaveProp({to: `/host/${id}`});
    expect(Link.children()).toIncludeText(name);
  })

  it('should render info about the host', () => {
    expect(wrapper.find('InfoItem[iconType="fa"][iconClass="map-marker"][description="Rzeszów"]')).toExist();
    expect(wrapper.find('InfoItem[iconType="pf"][iconClass="spinner"][description="RedHat"]')).toExist();
    expect(wrapper.find('InfoItem[iconType="pf"][iconClass="cluster"][description="2 hardware.cpu_plural, 1GB hardware.memory, 11.55GB hardware.disk"]')).toExist();
    expect(wrapper.find('InfoItem[iconType="fa"][iconClass="sitemap"][description="development"]')).toExist();
  })
});
