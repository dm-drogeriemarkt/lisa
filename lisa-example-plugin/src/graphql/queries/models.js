import gql from 'graphql-tag'

export default gql`
  query {
    models {
      edges {
        cursor
        node {
          id
          name
        }
      }
    }
  }
`
