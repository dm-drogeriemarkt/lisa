import React, { useContext } from 'react'
import T from 'i18n-react'
import { Row, Col } from 'patternfly-react'
import SelectInput from 'components/HostsForm/SelectInput'
import SliderInput from 'components/HostsForm/SliderInput'
import { formSettings, operatingsystems } from 'settings'
import { HostsFormContext } from 'lib/Context'
import { pluginsExtensions } from 'plugins'

const Manual = () => {
  const context = useContext(HostsFormContext)

  const {
    updateAttribute,
    attributes: {
      cpu,
      memory,
      size,
      operatingsystemId
    }
  } = useContext(HostsFormContext)

  const handleCpuChange = (value) => updateAttribute({ cpu: value })
  const handleMemoryChange = (value) => updateAttribute({ memory: value })
  const handleSizeChange = (value) => updateAttribute({ size: value })

  let sliders = [
    {
      attributeName: 'cpu',
      label: T.translate(`hosts_form.cpu`),
      value: cpu,
      minValue: formSettings.minCpuValue,
      maxValue: formSettings.maxCpuValue,
      step: formSettings.stepCpu,
      markStep: formSettings.markStepCpu,
      onChange: handleCpuChange
    },
    {
      attributeName: 'memory',
      label: T.translate(`hosts_form.memory`),
      value: memory,
      unit: 'GB',
      minValue: formSettings.minMemoryValue,
      maxValue: formSettings.maxMemoryValue,
      step: formSettings.stepMemory,
      markStep: formSettings.markStepMemory,
      onChange: handleMemoryChange
    },
    {
      attributeName: 'size',
      label: T.translate(`hosts_form.size`),
      value: size,
      unit: 'GB',
      minValue: formSettings.minSizeValue,
      maxValue: formSettings.maxSizeValue,
      step: formSettings.stepSize,
      markStep: formSettings.markStepSize,
      onChange: handleSizeChange
    }
  ]

  pluginsExtensions.filter(({ slot }) => {
    return slot === 'HostsForm/Resources/Manual_sliders'
  }).map(({ extension }) => {
    return extension(sliders, context)
  })

  let selects = []

  if(operatingsystems.length > 1) {
    const handleOperatingsystemChange = (value) => updateAttribute({ operatingsystemId: value })
    selects.push({
      attributeName: 'operatingsystemId',
      updateAttribute: updateAttribute,
      value: operatingsystemId,
      options: operatingsystems,
      onChange: handleOperatingsystemChange
    })
  }

  pluginsExtensions.filter(({ slot }) => {
    return slot === 'HostsForm/Resources/Manual_selects'
  }).map(({ extension }) => {
    return extension(selects, context)
  })

  return (
    <Row className='slider-row'>
      <Col xs={12} lg={6}>
        { sliders.map(({ ...attrs }, i) => <SliderInput key={i} {...attrs} />) }
        { selects.map(({ ...attrs }, i) => <SelectInput key={i} {...attrs} />) }
      </Col>
    </Row>
  )
}

export default Manual
