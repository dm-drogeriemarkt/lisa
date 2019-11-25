import gql from 'graphql-tag';

export default gql`
  query HostQuery($id: String!) {
    host(id: $id) {
      id
      name
      ip
      ip6
      operatingsystem {
        id
        name
        fullname
      }
      domain {
        id
        name
      }
      location {
        id
        name
      }
      factValues {
        totalCount
        edges {
          node {
            id
            value
            factName {
              name
            }
          }
        }
      }
    }
  }
`;
