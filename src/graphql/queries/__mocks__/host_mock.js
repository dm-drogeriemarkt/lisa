import HOST_QUERY from 'graphql/queries/host';

export default [
  {
    request: {
      query: HOST_QUERY,
      variables: {
        id: 'MDE6SG9zdC0x'
      }
    },
    result: {
      data: {
        host: {
          id: 'MDE6SG9zdC0x',
          name: 'host.example.com',
          ip: '42.38.17.86',
          ip6: '362e:e0a7:9811:ab21:f0ed:6b7a:db4a:a150',
          operatingsystem: {
            id: 1,
            name: 'RedHat',
            fullname: 'RedHat 6.1'
          },
          domain: {
            id: 1,
            name: 'development.example.com'
          },
          location: {
            id: 1,
            name: 'Rzeszów'
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
      }
    }
  }
]
