import React, { Component } from 'react';
import { camelCase } from 'lodash'
import { Col, FormGroup, ControlLabel } from 'patternfly-react';
import T from 'i18n-react';
import 'rc-slider/assets/index.css';
import './index.css';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

import { HostsFormContext } from 'lib/Context'

const Handle = Slider.Handle;

class SliderInput extends Component {
  static contextType = HostsFormContext

  marks() {
    const minValue = parseInt(this.props.minValue, 10)
    const unit = this.props.unit || '';

    let marks = { [minValue]: `${minValue}${unit}` };

    const marksStep = parseInt(this.props.markStep, 10)
    let marksCount = parseInt(this.props.maxValue, 10) / marksStep;

    while (marksCount > 0) {
      const mark = marksStep*marksCount;
      if (mark > minValue) {
        marks[mark] = `${mark}${unit}`;
      }
      marksCount--;
    }

    return marks
  }

  handleChange = (value) => {
    this.context.updateAttribute({
      [this.props.attributeName]: value
    });
  }

  handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

  render() {
    return (
      <FormGroup className='slider-row' controlId='username' bsSize='large'>
        <Col xs={12} style={{ textAlign: 'left' }}>
          <ControlLabel>
            {T.translate(`hosts_form.${camelCase(this.props.attributeName)}`)}
          </ControlLabel>
        </Col>
        <Col xs={12} sm={11} smOffset={1}>
          <Slider
            value={Number(this.props.value) || 0}
            min={parseInt(this.props.minValue, 10)}
            max={parseInt(this.props.maxValue, 10)}
            defaultValue={0}
            onChange={this.handleChange}
            handle={this.handle}
            step={parseInt(this.props.step, 10)}
            dots={true}
            marks={this.marks()}
          />
        </Col>
      </FormGroup>
    )
  }
}

export default SliderInput;
