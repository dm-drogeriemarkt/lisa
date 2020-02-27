import SUBNETS_BY_DOMAIN_QUERY from 'graphql/queries/subnetsByDomain'

export default [
  {
    request: {
      query: SUBNETS_BY_DOMAIN_QUERY,
      variables: {
        location: 'LAN',
        search: 'name=development.example.com and location = LAN'
      }
    },
    result: {
      data:{
        domains: {
          edges: [{
            cursor: 'MQ==',
            node: {
              id: 'MDE6RG9tYWluLTQ=',
              subnets: {
                edges: [
                  {
                    node: {
                      id: 'MDE6U3VibmV0LTE=',
                      name: 'subnet',
                      vlanid: 2
                    }
                  }
                ]
              }
            }
          }]
        }
      }
    }
  }
]
