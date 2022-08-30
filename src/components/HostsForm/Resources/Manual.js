import React from 'react'
import { useFormContext } from 'react-hook-form';
import T from 'i18n-react'
import { Grid, GridItem, ValidatedOptions } from '@patternfly/react-core';
import SelectInput from 'components/HostsForm/SelectInput'
import SliderInput from 'components/HostsForm/SliderInput'
import { formSettings, operatingsystems } from 'settings'
import { pluginsExtensions } from 'plugins'

const Manual = ({
  fields: {
    cpu: {
      field: {
        value: cpu,
        onChange: setCpu
      }
    },
    memory: {
      field: {
        value: memory,
        onChange: setMemory
      }
    },
    size: {
      field: {
        value: size,
        onChange: setSize
      }
    },
    operatingsystemId: {
      field: {
        value: operatingsystemId,
        onChange: setOperatingsystemId
      },
      fieldState: {
        invalid: operatingsystemIdInvalid
      }
    },
  }
}) => {
  const context = useFormContext()

  let sliders = [
    {
      name: 'cpu',
      label: T.translate('hosts_form.cpu'),
      value: cpu,
      min: formSettings.minCpuValue,
      max: formSettings.maxCpuValue,
      step: formSettings.stepCpu,
      onChange: setCpu
    },
    {
      name: 'memory',
      label: T.translate('hosts_form.memory'),
      value: memory,
      min: formSettings.minMemoryValue,
      max: formSettings.maxMemoryValue,
      step: formSettings.stepMemory,
      onChange: setMemory
    },
    {
      name: 'size',
      label: T.translate('hosts_form.size'),
      value: size,
      min: formSettings.minSizeValue,
      max: formSettings.maxSizeValue,
      step: formSettings.stepSize,
      onChange: setSize
    }
  ]

  pluginsExtensions.filter(({ slot }) => {
    return slot === 'HostsForm/Resources/Manual_sliders'
  }).map(({ extension }) => {
    return extension(sliders, context)
  })

  let selects = []

  if(operatingsystems.length > 1) {
    selects.push({
      name: 'operatingsystemId',
      value: operatingsystemId,
      options: operatingsystems,
      onChange: setOperatingsystemId,
      validated: operatingsystemIdInvalid ? ValidatedOptions.error : ValidatedOptions.success
    })
  }

  pluginsExtensions.filter(({ slot }) => {
    return slot === 'HostsForm/Resources/Manual_selects'
  }).map(({ extension }) => {
    return extension(selects, context)
  })

  return (
    <Grid hasGutter>
      <GridItem sm={6}>
        { sliders.map(({ ...attrs }, i) => <SliderInput key={i} {...attrs} />)}
        { selects.map(({ ...attrs }, i) => <SelectInput key={i} {...attrs} />) }
      </GridItem>
    </Grid>
  )
}

export default Manual
