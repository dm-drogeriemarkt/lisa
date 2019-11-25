import validate from './validate'
import humps from 'lodash-humps'
import { get, defaultsDeep } from 'lodash'

const json = require(`./${process.env.REACT_APP_SETTINGS_FILE}`)

validate(json)

const settings = humps(json)

const locationCode = get(settings, 'formSettings.defaultValues.locationCode', get(settings, 'locations.0.code'))
const defaultLocation = get(settings, 'locations', []).find(({ code }) => code === locationCode)

defaultsDeep(settings, {
  formSettings: {
    maxHostsCountValue: 10,
    hostCreationDuration: 10000,
    minCpuValue: 1,
    maxCpuValue: 8,
    stepCpu: 1,
    markStepCpu: 1,
    minMemoryValue: 4,
    maxMemoryValue: 64,
    stepMemory: 4,
    markStepMemory: 16,
    minSizeValue: 50,
    maxSizeValue: 900,
    stepSize: 50,
    markStepSize: 300,
    presetResources: [],
    defaultValues: {
      cpu: 1,
      memory: 4,
      size: 50,
      operatingsystemId: get(settings, 'operatingsystems[0].id'),
      locationCode: defaultLocation.code,
      computeResourceId: get(defaultLocation, 'relations.computeResourceId'),
      puppetMasterId: get(defaultLocation, 'relations.puppetCaProxyId'),
      datastoreTypeId: get(defaultLocation, 'datastoreTypes[0].id'),
      appTierName: get(settings, 'appTiers[0].name')
    }
  },
  defaultConfigs: {
    build: false,
    enabled: false,
    managed: false,
    computeAttributes: {
      start: false,
      memoryHotAddEnabled: false,
      cpuHotAddEnabled: false,
      corespersocket: false
    }
  },
  factNames: {
    cpu: 'processors::count',
    memory: 'memorysize_mb',
    disk: 'blockdevice_sda_size'
  }
})

const {
  formSettings,
  defaultConfigs,
  locations,
  operatingsystems,
  appTiers,
  factNames
} = settings

export {
  formSettings,
  defaultConfigs,
  locations,
  operatingsystems,
  appTiers,
  factNames
}
