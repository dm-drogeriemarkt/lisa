import OWNERS_QUERY from 'graphql/queries/owners';

export default [
  {
    request: {
      query: OWNERS_QUERY
    },
    result: {
      data: {
        currentUser: {
          id: 'MDE6VXNlci0xNg==',
          fullname: 'Joe Doe',
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
