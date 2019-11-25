import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../index';

describe('<Dashboard />', () => {
  const data = {
    page: 1,
    search: '',
    updateAttribute: () => {}
  }
  const { page, search, updateAttribute } = data;

  describe('when there are any hosts', () => {
    const hosts = {
      hosts: {
        totalCount: 1,
        edges: [{ id: 1 }]
      }
    };
    const { hosts: { totalCount, edges }} = hosts;

    it('render HostsList', () => {
      const wrapper = shallow(
        <Dashboard data={hosts}
          page={page}
          updateAttribute={updateAttribute}
          search={search} />
      )

      const element = wrapper.find('HostsList');
      expect(element).toExist(); 
      expect(element).toHaveProp({
        hosts: edges,
        totalCount: totalCount,
        page: page,
        updateAttribute: updateAttribute
      });
    })
  })

  describe('when there are no hosts', () => {
    const hosts = {
      hosts: {
        totalCount: 0,
        edges: []
      }
    };

    it('render no-hosts Notification', () => {
      const wrapper = shallow(
        <Dashboard data={hosts}
          page={page}
          updateAttribute={updateAttribute}
          search={search} />
      )

      expect(wrapper.find('Notification[className="no-hosts"]')).toExist();
    })
  })
});


