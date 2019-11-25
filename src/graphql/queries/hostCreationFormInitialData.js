import gql from 'graphql-tag';

export default gql`
  query {
    environments {
      edges {
        cursor
        node {
          id
          name
        }
      }
    }
    currentUser {
      usergroups {
        edges {
          cursor
          node {
            id
            name
          }
        }
      }
    }
  }
`;
