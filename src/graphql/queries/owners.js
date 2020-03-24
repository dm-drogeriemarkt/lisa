import gql from 'graphql-tag';

export default gql`
  query {
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
