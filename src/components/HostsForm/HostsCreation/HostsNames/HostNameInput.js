import React, { Component } from 'react';
import { Col, FormGroup, FormControl, ControlLabel, Icon } from 'patternfly-react';

import { HostsFormContext } from 'lib/Context'

class HostNameInput extends Component {
  static contextType = HostsFormContext

  constructor(props, context) {
    super(props, context);

    const defaultName = this.name();
    this.state = {
      valueChanged: false,
      value: defaultName
    };

    this.updateAttributeValue(defaultName);
  }

  // TODO: refactor to use useEffect hook
  UNSAFE_componentWillReceiveProps(nextProps) {
    const nextValue = this.name(nextProps);
    if (!this.state.valueChanged && this.state.value !== nextValue) {
      this.setState({
        value: nextValue
      });
      this.updateAttributeValue(nextValue)
    }
  }

  componentWillUnmount() {
    this.updateAttributeValue('');
  }

  ensureValueSet = (e) => {
    if (!e.target.value) {
      this.setDefaultValue();
    }
  }

  updateValue = (e) => {
    this.setState({
      valueChanged: true,
      value: e.target.value
    });
    this.updateAttributeValue(e.target.value);
  }

  setDefaultValue() {
    const defaultName = this.name();

    this.setState({
      valueChanged: false,
      value: defaultName
    });

    this.updateAttributeValue(defaultName)
  }

  updateAttributeValue = (value) => {
    let { attributes: { hostNames={} }} = this.context
    hostNames[`name_${this.props.number}`] = value ? value : undefined
    Object.keys(hostNames).forEach(key => hostNames[key] === undefined && delete hostNames[key])

    this.context.updateAttribute({ hostNames })
  }

  name = (props = this.props) => {
    const { project, role, number } = props;
    return `${project}-${role}-${this.hostNumber(number)}`;
  }

  hostNumber(number) {
    return number.toString().padStart(2, '0');
  }

  get pattern() {
    const { hostnamesAlreadyTaken: alreadyTaken } = this.context
    const alreadyTakenPattern = alreadyTaken.length ? `(?!${alreadyTaken.join('|')})` : ''

    return `^${alreadyTakenPattern}[a-z0-9]+-[a-z0-9]+-[0-9]{2}$`
  }

  render() {
    return (
      <FormGroup controlId='name' bsSize='large'>
        <Col xs={12}>
          <ControlLabel>
            {`Host ${this.props.number} Name`}
          </ControlLabel>
        </Col>
        <Col xs={12}>
          <FormControl
            value={this.state.value}
            onChange={this.updateValue}
            onBlur={this.ensureValueSet}
            bsClass='Select-control input-separator'
            pattern={this.pattern}
            maxLength='63'
            required
          />
          <Icon type='pf' name='ok' />
          <Icon type='pf' name='error-circle-o' />
        </Col>
      </FormGroup>
    )
  }
}

export default HostNameInput;
