import React, { Component } from 'react';
import { snakeCase } from 'lodash';
import { Col, FormGroup, ControlLabel, Spinner } from 'patternfly-react';
import Select from 'react-select';
import T from 'i18n-react';
import './index.css';

class SelectInput extends Component {
  options() {
    const { loading, options=[] } = this.props;
    if(loading) {
      return [{ value: undefined, label: <Spinner loading /> }]
    }
    return options.map(({ id: value, name: label }) => ({ value, label }))
  }

  handleChange = (newValue) => {
    this.props.onChange({
      [this.props.attributeName]: this.attributeValue(newValue)
    });
  }

  attributeValue(value) {
    return this.props.multi ? value.map((v) => v.value) : value.value
  }

  render() {
    const { loading, disabled, multi, attributeName, value = '' } = this.props;
    const placeholder = loading ? 'hosts_form.placeholders.loading'
      : `hosts_form.placeholders.${snakeCase(attributeName)}${disabled ? '_disabled' : ''}`;

    return (
      <FormGroup controlId='' bsSize='large' validationState='error'>
        <Col xs={12}>
          <ControlLabel>
            {T.translate(`hosts_form.${snakeCase(attributeName)}`)}
          </ControlLabel>
        </Col>
        <Col xs={12}>
          <Select
            value={value}
            onChange={this.handleChange}
            options={this.options()}
            clearable={false}
            required={true}
            searchable={true}
            multi={multi}
            disabled={disabled}
            placeholder={T.translate(placeholder)}
            menuContainerStyle={{zIndex: 2}}
          />
          <input className="hidden-input" value={value} required onChange={() => {}} />
        </Col>
      </FormGroup>
    )
  }
}

export default SelectInput;
