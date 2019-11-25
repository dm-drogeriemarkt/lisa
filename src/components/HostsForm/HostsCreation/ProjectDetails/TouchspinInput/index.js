import React, { Component } from 'react';
import { Col, FormGroup, FormControl, ControlLabel, InputGroup, Button } from 'patternfly-react';
import T from 'i18n-react';
import './TouchspinInput.css';

import { formSettings } from 'settings'
import { HostsFormContext } from 'lib/Context'

class TouchspinInput extends Component {
  static contextType = HostsFormContext

  increaseValue = () => {
    if (this.context.attributes.hostCount < parseInt(formSettings.maxHostsCountValue, 10)) {
      this.context.updateAttribute({
        hostCount: ++this.context.attributes.hostCount
      })
    }
  }

  decreaseValue = () => {
    if (this.context.attributes.hostCount > 1) {
      this.context.updateAttribute({
        hostCount: --this.context.attributes.hostCount
      })
    }
  }

  get hostCount() {
    return this.context.attributes.hostCount || 1
  }

  render() {
    return (
      <FormGroup controlId='hostCount' bsSize='large'>
        <Col xs={12}>
          <ControlLabel>
            {T.translate('hosts_form.host_count')}
          </ControlLabel>
        </Col>
        <Col xs={6}>
          <InputGroup bsSize='large' className='touchspin-input-group'>
            <InputGroup.Button>
              <Button onClick={this.decreaseValue}>-</Button>
            </InputGroup.Button>
            <FormControl
              className='touchspin-input text-center'
              name='hostCount'
              value={this.hostCount}
              readOnly={true}
            />
            <InputGroup.Button>
              <Button onClick={this.increaseValue}>+</Button>
            </InputGroup.Button>
          </InputGroup>
        </Col>
      </FormGroup>
    )
  }
}

export default TouchspinInput;
