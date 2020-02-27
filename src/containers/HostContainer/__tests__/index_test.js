import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from 'react-apollo/test-utils';
import HOST_QUERY_MOCK from 'graphql/queries/__mocks__/host_mock';
import HostContainer from 'containers/HostContainer';

test('Mounted HostContainer', async () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[{pathname: '/host/MDE6SG9zdC0x', key: 'testKey'}]}>
      <MockedProvider mocks={[...HOST_QUERY_MOCK]} addTypename={false}>
        <HostContainer match={{params: { id: 'MDE6SG9zdC0x' }}} />
      </MockedProvider>
    </MemoryRouter>
  )

  await wait(0);
  wrapper.update();

  expect(wrapper.find('Host')).toHaveProp(HOST_QUERY_MOCK[0].result)
});
