import T from 'i18n-react'
import { cloneDeep, merge, update, set, unset } from 'lodash'
import { defaultConfigs, operatingsystems, locations, appTiers } from '../settings'

const MB_PER_GB = 1024

const hostsCreateParams = (formValues, { computeResource }) => {
  class HostParamsError extends Error {
    constructor(message) {
      super(message);
      this.message = message;
      this.name = 'HostParamsError';
    }
  }

  let data = cloneDeep(formValues)

  if(!computeResource) { throw new HostParamsError(T.translate('hosts_form.errors.host_params.compute_resource_not_found')) }
  const network = computeResource.networks.edges.map(({ node }) => node).find(({ vlanid }) => vlanid === data.vlanid)
  if(!network) { throw new HostParamsError(T.translate('hosts_form.errors.host_params.network_not_found', { subnet_vlanid: data.vlanid }))}

  const operatingsystem = operatingsystems.find(({ id }) => id === data.operatingsystemId)
  const location = locations.find(({ code }) => code === data.locationCode)
  const datastoreType = location.datastoreTypes.find(({ id }) => id === data.datastoreTypeId)
  const appTier = appTiers.find(({ name }) => name === data.appTierName)
  const medium = location.relations.media.find(({ operatingsystemId }) => operatingsystemId === operatingsystem.id)

  const { hostCount, hostNames } = data

  unset(data, 'hostCount')
  unset(data, 'hostNames')
  unset(data, 'project')
  unset(data, 'role')
  unset(data, 'appTierName')
  unset(data, 'datastoreTypeId')
  unset(data, 'vlanid')
  unset(data, 'locationCode')

  set(data, 'locationId', location.id)
  set(data, 'computeAttributes.cpus', String(data.cpu))
  unset(data, 'cpu')

  set(data, 'computeAttributes.volumes_attributes.0.size_gb', String(data.size))
  unset(data, 'size')

  set(data, 'computeAttributes.memory_mb', String(data.memory * MB_PER_GB))
  unset(data, 'memory')

  set(data, 'environmentId', data.puppetEnvId)
  unset(data, 'puppetEnvId')

  set(data, 'puppetProxyId', data.puppetMasterId)
  unset(data, 'puppetMasterId')

  set(data, 'puppetCaProxyId', location.relations.puppetCaProxyId)
  set(data, 'ptableId', operatingsystem.relations.ptableId)
  set(data, 'mediumId', medium.id)

  set(data, 'computeAttributes.cluster', location.relations.cluster)
  set(data, 'computeAttributes.guest_id', operatingsystem.relations.guestOperatingsystemId)
  set(data, 'interfacesAttributes.0.computeAttributes.network', network.id)

  const resource_pool = appTier.relations.locations.find(({ code }) => code === location.code).resourcePool
  set(data, 'computeAttributes.resource_pool', resource_pool)

  const { computeAttributes: { pathPrefix }} = location
  set(data, 'computeAttributes.path', `${pathPrefix}${data.ownerName}`)
  unset(data, 'ownerName')

  merge(data, defaultConfigs)

  // convert boolean to "0"/"1"
  update(data, 'computeAttributes.start', (value) => String(+value))
  update(data, 'computeAttributes.memoryHotAddEnabled', (value) => String(+value))
  update(data, 'computeAttributes.cpuHotAddEnabled', (value) => String(+value))

  const datastoreClusterName = (datastoreTemplate, hostNumber) => {
    const datastoreDatacenterNumber = hostNumber % 2 === 0 ? '2' : '1'

    return datastoreTemplate.replace('#DC#', datastoreDatacenterNumber)
  }

  return [...Array(hostCount)].map((_, i) => merge({
    name: hostNames[`name_${i+1}`],
    computeAttributes: {
      volumes_attributes: [
        {
          storage_pod: datastoreClusterName(datastoreType.template, i+1)
        }
      ]
    }
  }, data))
}

export default hostsCreateParams
