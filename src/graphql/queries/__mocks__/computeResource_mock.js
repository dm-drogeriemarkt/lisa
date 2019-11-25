import COMPUTE_RESOURCE_QUERY from 'graphql/queries/computeResource';

export default {
  request: {
    query: COMPUTE_RESOURCE_QUERY,
    variables: {
      id: 'MDE6Q29tcHV0ZVJlc291cmNlLTI='
    }
  },
  result: {
    data: {
      computeResource: {
        id: 'MDE6Q29tcHV0ZVJlc291cmNlLTI=',
        name: 'ComputeResource2',
        networks: {
          totalCount: 1,
          edges: [
            {
              node: {
                id: '1',
                vlanid: 2,
                __typename: 'Vmware'
              }
            }
          ]
        }
      }
    }
  }
}
