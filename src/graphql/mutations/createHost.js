import gql from 'graphql-tag';

export default gql`
  mutation CreateHostMutation (
    $name: String!,
    $build: Boolean!,
    $enabled: Boolean!,
    $managed: Boolean!,
    $ownerId: ID,
    $locationId: ID!,
    $organizationId: ID!,
    $environmentId: ID!,
    $architectureId: ID!,
    $domainId: ID,
    $operatingsystemId: ID!,
    $mediumId: ID!,
    $ptableId: ID!,
    $subnetId: ID,
    $computeResourceId: ID,
    $puppetProxyId: ID!,
    $puppetCaProxyId: ID!,
    $puppetclassIds: [ID!]!,
    $computeAttributes: RawJson,
    $interfacesAttributes: [InterfaceAttributesInput!],
  ) {
    createHost(input: {
      name: $name,
      build: $build,
      enabled: $enabled,
      managed: $managed,
      ownerId: $ownerId,
      locationId: $locationId,
      organizationId: $organizationId,
      environmentId: $environmentId,
      architectureId: $architectureId,
      domainId: $domainId,
      operatingsystemId: $operatingsystemId,
      mediumId: $mediumId,
      ptableId: $ptableId,
      subnetId: $subnetId,
      computeResourceId: $computeResourceId,
      puppetProxyId: $puppetProxyId,
      puppetCaProxyId: $puppetCaProxyId,
      puppetclassIds: $puppetclassIds,
      computeAttributes: $computeAttributes,
      interfacesAttributes: $interfacesAttributes,
    }) {
      host {
        id
        name
      }
    }
  }
`;
