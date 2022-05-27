import PUPPET_ENVS_QUERY from 'graphql/queries/puppetEnvs';

export default [
  {
    request: {
      query: PUPPET_ENVS_QUERY
    },
    result: {
      data: {
        environments: {
          edges: [
            {
              cursor: 'MQ==',
              node: {
                id: 'MDE6RW52aXJvbm1lbnQtMQ==',
                name: 'env1',
              }
            },
            {
              cursor: 'Mw==',
              node: {
                id: 'MDE6RW52aXJvbm1lbnQtMA==',
                name: 'env2',
              }
            }
          ]
        },
        currentUser: {
          usergroups: {
            edges: [
              {
                cursor: 'MQ==',
                node: {
                  id: 'MDE6VXNlcmdyb3VwLTE=',
                  name: 'admin group',
                }
              }
            ]
          }
        }
      }
    }
  }
]
