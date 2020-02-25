import HOST_CREATION_FORM_INITIAL_DATA_QUERY from 'graphql/queries/hostCreationFormInitialData';

export default [
  {
    request: {
      query: HOST_CREATION_FORM_INITIAL_DATA_QUERY
    },
    result: {
      data: {
        environments: {
          edges: [
            {
              cursor: 'MQ==',
              node: {
                id: 'MDE6RW52aXJvbm1lbnQtMQ==',
                name: 'env1'
              }
            },
            {
              cursor: 'Mw==',
              node: {
                id: 'MDE6RW52aXJvbm1lbnQtMA==',
                name: 'env2'
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
