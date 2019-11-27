import CREATE_HOST_MUTATION from 'graphql/mutations/createHost'

export default {
  request: {
    query: CREATE_HOST_MUTATION,
    variables: {
      name: 'project-role-01',
      build: false,
      enabled: false,
      managed: false,
      locationId: 'MDE6TG9jYXRpb24tNA==',
      organizationId: 'MDE6T3JnYW5pemF0aW9uLTE=',
      environmentId: 'MDE6RW52aXJvbm1lbnQtMQ==',
      architectureId: 'MDE6QXJjaGl0ZWN0dXJlLTE=',
      operatingsystemId: 'MDE6T3BlcmF0aW5nc3lzdGVtLTE=',
      mediumId: 'MDE6TWVkaXVtLTEw',
      ptableId: 'MDE6UHRhYmxlLTEwNw==',
      puppetProxyId: 'MDE6U21hcnRQcm94eS0x',
      puppetCaProxyId: 'MDE6U21hcnRQcm94eS0x',
      ownerId: 'MDE6VXNlcmdyb3VwLTE=',
      domainId: 'MDE6RG9tYWluLTQ=',
      subnetId: 'MDE6U3VibmV0LTE=',
      computeResourceId: 'MDE6Q29tcHV0ZVJlc291cmNlLTI=',
      puppetclassIds: ['MDE6UHVwcGV0Y2xhc3MtMQ=='],
      computeAttributes: {
        cpus: '1',
        memory_mb: '4096',
        cluster: 'CLUSTER',
        guest_id: 'rhel7_64Guest',
        resource_pool: 'default',
        path: '/Datencenter/LAN/vm/Linux/admin group',
        start: '0',
        memoryHotAddEnabled: '0',
        cpuHotAddEnabled: '0',
        corespersocket: '0',
        volumes_attributes: [
          {
            size_gb: '50',
            storage_pod: '1-LAN'
          }
        ]
      },
      interfacesAttributes: [
        {
          computeAttributes: {
            type: 'VirtualVmxnet3',
            network: '1'
          }
        }
      ],
    }
  },
  result: {
    data: {
      createHost: {
        host: {
          id: 'MDE6SG9zdC0zOQ==',
          name: 'project-role-01'
        }
      }
    }
  }
}
