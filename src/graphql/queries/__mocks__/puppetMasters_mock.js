import PUPPETMASTERS_QUERY from 'graphql/queries/puppetMasters'

export default [
  {
    request: {
      query: PUPPETMASTERS_QUERY,
      variables: {
        search: 'feature = Puppet and location = LAN'
      }
    },
    result: {
      data: {
        smartProxies: {
          edges: [
            {
              cursor: 'MQ==',
              node: {
                id: 'MDE6U21hcnRQcm94eS0x',
                name: 'smart_proxy'
              }
            }
          ]
        }
      }
    }
  }
]