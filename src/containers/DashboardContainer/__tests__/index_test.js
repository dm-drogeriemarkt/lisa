import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import { AuthProvider as OidcAuthProvider } from 'lib/auth/oidc';
import { AuthProvider as ForemanAuthProvider } from 'lib/auth/foreman';
import HOSTS_QUERY_MOCK from 'graphql/queries/__mocks__/hosts_mock';
import DashboardContainer from 'containers/DashboardContainer';

test('Mounted DashboardContainer', async () => {
  const oidcConfig = { clientId: 'cid123', authority: 'ath', autoSignIn: false };

  const wrapper = mount(
    <MemoryRouter initialEntries={[{pathname: '/', key: 'testKey'}]}>
      <MockedProvider mocks={[...HOSTS_QUERY_MOCK]} addTypename={false}>
        <ForemanAuthProvider>
          <OidcAuthProvider {...oidcConfig}>
            <DashboardContainer location={{ refreshData: () => { return true } }} />
          </OidcAuthProvider>
        </ForemanAuthProvider>
      </MockedProvider>
    </MemoryRouter>
  )

  await wait(0);
  wrapper.update();

  expect(wrapper.find('Dashboard')).toHaveProp(HOSTS_QUERY_MOCK[0].result)
});
