import React from 'react'
import { Col, FormGroup, ControlLabel, Spinner } from 'patternfly-react'
import Select from 'react-select'
import './index.css'

const SelectInput = ({
  label,
  placeholder,
  loading,
  value,
  options,
  multi,
  onChange,
  disabled,
  clearable = false,
  required = true,
  searchable = true
}) => {
  const selectOptions = loading ? [{ value: undefined, label: <Spinner loading /> }]
    : options.map(({ id: value, name: label }) => ({ value, label }))

  const handleChange = (value) => {
    const newValue = value && (multi ? value.map(({ value }) => value) : value.value)
    onChange(newValue)
  }

  return (
    <FormGroup controlId='' bsSize='large' validationState='error'>
      <Col xs={12}>
        <ControlLabel>
          { label }
        </ControlLabel>
      </Col>
      <Col xs={12}>
        <Select
          placeholder={placeholder}
          value={value}
          options={selectOptions}
          multi={multi}
          onChange={handleChange}
          disabled={disabled}
          clearable={clearable}
          required={required}
          searchable={searchable}
          menuContainerStyle={{zIndex: 2}}
        />
        { required && <input className="hidden-input" defaultValue={value} required onChange={() => {}} /> }
      </Col>
    </FormGroup>
  )
}

export default SelectInput
