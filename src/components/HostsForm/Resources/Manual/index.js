import React from 'react';
import { Row, Col } from 'patternfly-react';
import SelectInput from 'components/HostsForm/SelectInput';
import SliderInput from './SliderInput';

import { formSettings, operatingsystems } from 'settings'
import { HostsFormContext } from 'lib/Context'

const Manual = () => (
  <HostsFormContext.Consumer>
    {({ updateAttribute, attributes: { cpu, memory, size, operatingsystemId }}) => (
      <Row className='slider-row'>
        <Col xs={12} lg={6}>
          <SliderInput
            attributeName='cpu'
            value={cpu}
            minValue={formSettings.minCpuValue}
            maxValue={formSettings.maxCpuValue}
            step={formSettings.stepCpu}
            markStep={formSettings.markStepCpu}
          />

          <SliderInput
            attributeName='memory'
            value={memory}
            unit="GB"
            minValue={formSettings.minMemoryValue}
            maxValue={formSettings.maxMemoryValue}
            step={formSettings.stepMemory}
            markStep={formSettings.markStepMemory}
          />

          <SliderInput
            attributeName='size'
            value={size}
            unit="GB"
            minValue={formSettings.minSizeValue}
            maxValue={formSettings.maxSizeValue}
            step={formSettings.stepSize}
            markStep={formSettings.markStepSize}
          />

          { operatingsystems.length > 1 &&
            <SelectInput
              attributeName='operatingsystemId'
              updateAttribute={updateAttribute}
              value={operatingsystemId}
              options={operatingsystems}
            />
          }
        </Col>
      </Row>
    )}
  </HostsFormContext.Consumer>
)

export default Manual
