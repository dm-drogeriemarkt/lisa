import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from '@apollo/react-testing'
import HOSTS_QUERY_MOCK from 'graphql/queries/__mocks__/hosts_mock';
import DashboardContainer from 'containers/DashboardContainer';

test('Mounted DashboardContainer', async () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[{pathname: '/', key: 'testKey'}]}>
      <MockedProvider mocks={[...HOSTS_QUERY_MOCK]} addTypename={false}>
        <DashboardContainer location={{ refreshData: () => { return true } }} />
      </MockedProvider>
    </MemoryRouter>
  )

  await wait(0);
  wrapper.update();

  expect(wrapper.find('Dashboard')).toHaveProp(HOSTS_QUERY_MOCK[0].result)
});
