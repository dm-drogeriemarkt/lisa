import gql from 'graphql-tag';

export default gql`
  query {
    currentUser {
      id
      fullname
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
