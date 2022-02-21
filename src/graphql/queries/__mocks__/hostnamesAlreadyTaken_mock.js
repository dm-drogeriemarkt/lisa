import HOSTNAMES_ALREADY_TAKEN_QUERY from 'graphql/queries/hostnamesAlreadyTaken';

export default [
  {
    request: {
      query: HOSTNAMES_ALREADY_TAKEN_QUERY,
      variables: {
        first: 1,
        last: 1,
        search: 'name=project-role-01.development.example.com'
      }
    },
    result: {
      data:{
        hosts: {
          edges: []
        }
      }
    }
  }
]
