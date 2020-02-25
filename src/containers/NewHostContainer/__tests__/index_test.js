import React from 'react'
import { mount } from 'enzyme'
import wait from 'waait'
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from 'react-apollo/test-utils'
import NewHostContainer from 'containers/NewHostContainer'

import COMPUTE_RESOURCE_QUERY_MOCK from 'graphql/queries/__mocks__/computeResource_mock'
import HOST_CREATION_FORM_INITIAL_DATA_QUERY_MOCK from 'graphql/queries/__mocks__/hostCreationFormInitialData_mock'
import SUBNETS_BY_DOMAIN_QUERY_MOCK from 'graphql/queries/__mocks__/subnetsByDomain_mock'
import PUPPETMASTERS_QUERY_MOCK from 'graphql/queries/__mocks__/puppetMasters_mock'
import PUPPET_CLASSES_BY_ENVIRONMENT_QUERY_MOCK from 'graphql/queries/__mocks__/puppetClassesByEnvironment_mock'
import HOSTNAMES_ALREADY_TAKEN_MOCK from 'graphql/queries/__mocks__/hostnamesAlreadyTaken_mock'
import CREATE_HOST_MUTATION_MOCK from 'graphql/mutations/__mocks__/createHost_mock'

test('Mounted NewHostContainer', async () => {
  const mocks = [
    ...COMPUTE_RESOURCE_QUERY_MOCK,
    ...HOST_CREATION_FORM_INITIAL_DATA_QUERY_MOCK,
    ...SUBNETS_BY_DOMAIN_QUERY_MOCK,
    ...PUPPETMASTERS_QUERY_MOCK,
    ...HOSTNAMES_ALREADY_TAKEN_MOCK,
    ...CREATE_HOST_MUTATION_MOCK,
    ...PUPPET_CLASSES_BY_ENVIRONMENT_QUERY_MOCK
  ]

  const wrapper = mount(
    <MemoryRouter initialEntries={['/host-new']}>
      <MockedProvider mocks={ mocks } addTypename={false}>
        <NewHostContainer />
      </MockedProvider>
    </MemoryRouter>
  )

  const subnetSelect = wrapper.find('Select[placeholder="hosts_form.placeholders.subnet_id"]')
  subnetSelect.instance().selectValue({ value: 'MDE6U3VibmV0LTE=', label: 'subnet' })

  const customPuppetConfigButton = wrapper.find('button').findWhere(x => x.text() === 'hosts_form.puppet_config.default.link')
  customPuppetConfigButton.simulate('click')

  await wait()
  wrapper.update()

  const puppetEnvIdSelect = wrapper.find('Select[placeholder="hosts_form.placeholders.puppet_env_id"]')
  puppetEnvIdSelect.instance().selectValue({ value: 'MDE6RW52aXJvbm1lbnQtMA==', label: 'env2' })

  await wait()
  wrapper.update()

  const puppetclassIdsSelect = wrapper.find('Select[placeholder="hosts_form.placeholders.puppetclass_ids"]')
  puppetclassIdsSelect.instance().selectValue({ value: 'MDE6UHVwcGV0Y2xhc3MtMg==', label: 'ppclass2' })

  const projectInput = wrapper.find('input[name="project"]')
  projectInput.instance().value = 'project'
  projectInput.simulate('change')

  const roleInput = wrapper.find('input[name="role"]')
  roleInput.instance().value = 'role'
  roleInput.simulate('change')

  const submitButton = wrapper.find('button[type="submit"]')
  submitButton.simulate('submit')

  await wait()
  await wait()
  wrapper.update()

  expect(wrapper.find('NewHostContainer').state('createdHosts')).toEqual([{ name: 'project-role-01', number: 1 }])
  expect(
    wrapper.containsMatchingElement(
      <span>hosts_form.created_hosts</span>
    )
  ).toBeTruthy()
})
