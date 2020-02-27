import PUPPET_CLASSES_BY_ENVIRONMENT_QUERY from 'graphql/queries/puppetClassesByEnvironment'

export default [
  {
    request: {
      query: PUPPET_CLASSES_BY_ENVIRONMENT_QUERY,
      variables: {
        id: 'MDE6RW52aXJvbm1lbnQtMQ=='
      }
    },
    result: {
      data: {
        environment: {
          puppetclasses: {
            edges: []
          }
        }
      }
    }
  },
  {
    request: {
      query: PUPPET_CLASSES_BY_ENVIRONMENT_QUERY,
      variables: {
        id: 'MDE6RW52aXJvbm1lbnQtMA=='
      }
    },
    result: {
      data: {
        environment: {
          puppetclasses: {
            edges: [
              {
                node: {
                  id: 'MDE6UHVwcGV0Y2xhc3MtMQ==',
                  name: 'ppclass1'
                }
              },
              {
                node: {
                  id: 'MDE6UHVwcGV0Y2xhc3MtMg==',
                  name: 'ppclass2'
                }
              }
            ]
          }
        }
      }
    }
  }
]
