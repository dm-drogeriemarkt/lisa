import HOSTS_QUERY from 'graphql/queries/hosts';

export default {
  request: {
    query: HOSTS_QUERY,
    variables: {
      first: 10,
      last: 10,
      sortBy: 'created_at',
      sortDirection: 'DESC',
      search: ''
    }
  },
  result: {
    data:{
      hosts: {
        totalCount: 1,
        pageInfo: {
          startCursor: 'MQ==',
          endCursor: 'MQ==',
          hasNextPage: false,
          hasPreviousPage: false,
        },
        edges: [{
          cursor: 'MQ==',
          node: {
            id: 'MDE6SG9zdC0y',
            name: 'host.example.com',
            path: '/hosts/host.example.com',
            build: false,
            createdAt: '2018-12-10T10:06:04Z',
            operatingsystem: {
              id: 'MDE6T3BlcmF0aW5nc3lzdGVtLTE=',
              name: 'RedHat',
            },
            location: {
              id: 'MDE6TG9jYXRpb24tMg==',
              name: 'Rzeszów',
            },
            domain: {
              id: 'MDE6RG9tYWluLTE=',
              name: 'development.example.com',
            },
            factValues: {
              totalCount: 3,
              edges: [
                {
                  node: {
                    id: 'MDE6RmFjdFZhbHVlLTE=',
                    value: 12400000000,
                    factName: {
                      name: 'blockdevice_sda_size'
                    }
                  }
                },
                {
                  node: {
                    id: 'MDE6RmFjdFZhbHVlLTI=',
                    value: 1024,
                    factName: {
                      name: 'memorysize_mb'
                    }
                  }
                },
                {
                  node: {
                    id: 'MDE6RmFjdFZhbHVlLTM=',
                    value: 2,
                    factName: {
                      name: 'processors::count'
                    }
                  }
                }
              ]
            }
          }
        }]
      }
    }
  }
};
