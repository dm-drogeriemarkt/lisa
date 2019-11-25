import gql from 'graphql-tag';

export default gql`
  query HostsQuery(
      $first: Int,
      $last: Int,
      $sortBy: String,
      $sortDirection: SortDirectionEnum,
      $search: String
    ) {
    hosts(
      first: $first,
      last: $last,
      sortBy: $sortBy,
      sortDirection: $sortDirection,
      search: $search
    )
    {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          id
          name
          build
          createdAt
          path
          operatingsystem {
            id
            name
          }
          location {
            id
            name
          }
          domain {
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
    }
  }
`;
