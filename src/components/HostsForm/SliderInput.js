import React from 'react';
import { Slider, FormGroup } from '@patternfly/react-core';

const SliderInput = ({ name, label, value, onChange, ...attrs }) => (
  <FormGroup label={label} fieldId={`field-id-${name}`}>
    <Slider value={value} onChange={onChange} {...attrs} hasTooltipOverThumb />
  </FormGroup>
)

export default SliderInput;
