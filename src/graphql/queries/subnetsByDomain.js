import gql from 'graphql-tag';

export default gql`
  query Domain($search: String!, $location: String!) {
    domains(search: $search) {
      edges {
        cursor
        node {
          id
          subnets(location: $location) {
            edges {
              node {
                id
                name
                vlanid
              }
            }
          }
        }
      }
    }
  }
`;
