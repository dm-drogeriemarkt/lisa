import gql from 'graphql-tag';

export default gql`
  query computeResource($id: String!) {
    computeResource(id: $id) {
      id
      name
      networks {
        totalCount
        edges {
          node {
            __typename
            ... on Vmware {
              id
              vlanid
            }
          }
        }
      }
    }
  }
`;
