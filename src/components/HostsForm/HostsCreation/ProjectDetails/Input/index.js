import React, { Component } from 'react';
import { Col, FormGroup, FormControl, ControlLabel, Icon } from 'patternfly-react';
import classNames from 'classnames'
import T from 'i18n-react';
import './Input.css';

import { HostsFormContext } from 'lib/Context'

class SelectInput extends Component {
  static contextType = HostsFormContext

  handleChange = (e) => {
    this.context.updateAttribute({
      [this.props.attributeName]: e.target.value
    });
  }

  render() {
    const { attributeName } = this.props;

    return (
      <FormGroup controlId={attributeName} bsSize='large'>
        <Col xs={12}>
          <ControlLabel>
            {T.translate(`hosts_form.hosts_creation.project_details.${attributeName}`)}
          </ControlLabel>
        </Col>
        <Col xs={12}>
          <FormControl
            name={attributeName}
            onChange={this.handleChange}
            bsClass={classNames('Select-control', { required: this.props.invalid })}
            placeholder={T.translate(`hosts_form.hosts_creation.project_details.placeholders.${attributeName}`)}
            pattern='^[a-z0-9]+$'
            maxLength='29'
            required
          />
          <Icon type='pf' name='ok' />
          <Icon type='pf' name='error-circle-o' />
        </Col>
      </FormGroup>
    )
  }
}

export default SelectInput;
