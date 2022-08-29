import { mutation as generateMutation, params as applyParams, types } from 'typed-graphqlify'
import gql from 'graphql-tag'
import { merge } from 'lodash'
import { pluginsExtensions } from 'plugins'

const SLOT = 'GraphQL/Mutations/CreateHostMutation/Input'
const CORE_INPUT = {
  $name: 'String!',
  $build: 'Boolean!',
  $enabled: 'Boolean!',
  $managed: 'Boolean!',
  $ownerId: 'ID',
  $locationId: 'ID!',
  $organizationId: 'ID!',
  $environmentId: 'ID!',
  $architectureId: 'ID!',
  $domainId: 'ID',
  $operatingsystemId: 'ID!',
  $mediumId: 'ID!',
  $ptableId: 'ID!',
  $subnetId: 'ID',
  $computeResourceId: 'ID',
  $puppetProxyId: 'ID!',
  $puppetCaProxyId: 'ID!',
  $puppetclassIds: '[ID!]!',
  $computeAttributes: 'RawJson',
  $interfacesAttributes: '[InterfaceAttributesInput!]'
}

const inputExtensions = pluginsExtensions.filter(({ slot }) => slot === SLOT).map(({ extension }) => extension)
const input = merge(CORE_INPUT, ...inputExtensions)
const mutationParams = Object.keys(input).reduce((acc, curr) => {
  return Object.assign(acc, { [curr.substr(1)]: curr })
}, {})
const mutationString = generateMutation('CreateHostMutation', applyParams(input, {
  createHost: applyParams({ input: mutationParams }, {
    host: {
      id: types.string,
      name: types.string,
    },
    errors: {
      path: [types.string],
      message: types.string,
    }
  })
}))

export default gql`${mutationString}`
