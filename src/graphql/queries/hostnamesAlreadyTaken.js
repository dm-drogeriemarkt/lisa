import gql from 'graphql-tag';

export default gql`
  query (
      $first: Int,
      $last: Int,
      $search: String
    ) {
    hosts(
      first: $first,
      last: $last,
      search: $search
    )
    {
      edges {
        cursor
        node {
          name
        }
      }
    }
  }
`;
