import React from 'react';
import { Col, FormGroup, ControlLabel } from 'patternfly-react';
import 'rc-slider/assets/index.css';
import './index.css';
import Slider, { Handle } from 'rc-slider';
import Tooltip from 'rc-tooltip';

const SliderInput = ({
  attributeName,
  label,
  value,
  minValue,
  maxValue,
  step,
  markStep,
  unit = '',
  onChange: handleChange
}) => {
  let marks = { [minValue]: `${minValue}${unit}` };
  let marksCount = maxValue / markStep;

  while (marksCount > 0) {
    const mark = markStep*marksCount;
    if (mark > minValue) {
      marks[mark] = `${mark}${unit}`;
    }
    marksCount--;
  }

  const handle = ({ value, dragging, index, ...restProps }) => (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  )

  return (
    <FormGroup className='slider-row' controlId='username' bsSize='large'>
      <Col xs={12} style={{ textAlign: 'left' }}>
        <ControlLabel>{ label }</ControlLabel>
      </Col>
      <Col xs={12} sm={11} smOffset={1}>
        <Slider
          value={Number(value) || 0}
          min={minValue}
          max={maxValue}
          defaultValue={0}
          onChange={handleChange}
          handle={handle}
          step={step}
          dots={true}
          marks={marks}
        />
      </Col>
    </FormGroup>
  )
}

export default SliderInput
