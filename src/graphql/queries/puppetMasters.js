import gql from 'graphql-tag';

export default gql`
  query PuppetMasters($search: String!){
    smartProxies(search: $search) {
      edges {
        cursor
        node {
          id
          name
        }
      }
    }
  }
`;
