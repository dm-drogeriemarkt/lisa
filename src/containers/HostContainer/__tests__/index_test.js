import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import { AuthProvider as OidcAuthProvider } from 'lib/auth/oidc';
import { AuthProvider as ForemanAuthProvider } from 'lib/auth/foreman';
import HOST_QUERY_MOCK from 'graphql/queries/__mocks__/host_mock';
import HostContainer from 'containers/HostContainer';

test('Mounted HostContainer', async () => {
  const oidcConfig = { clientId: 'cid123', authority: 'ath', autoSignIn: false };

  const wrapper = mount(
    <MemoryRouter initialEntries={['/host/MDE6SG9zdC0x']}>
      <Routes>
        <Route path='host/:id' element={ 
          <MockedProvider mocks={[...HOST_QUERY_MOCK]} addTypename={false}>
            <ForemanAuthProvider>
              <OidcAuthProvider {...oidcConfig}>
                <HostContainer match={{params: { id: 'MDE6SG9zdC0x' }}} />
              </OidcAuthProvider>
            </ForemanAuthProvider>
          </MockedProvider>
        }/>
      </Routes>
    </MemoryRouter>
  )

  await wait(0);
  wrapper.update();

  expect(wrapper.find('Host')).toHaveProp(HOST_QUERY_MOCK[0].result)
});
