import gql from 'graphql-tag';

export default gql`
  query Environment($id: String!) {
    environment(id: $id) {
      puppetclasses {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;
