import React from 'react'
import { FormGroup } from '@patternfly/react-core'
import SingleSelectInput from './SingleSelectInput';
import MultipleSelectInput from './MultipleSelectInput';
import './index.scss'

const SelectInput = ({
  name,
  label,
  multi,
  isRequired = false,
  ...props
}) => (
  <FormGroup
    label={label}
    isRequired={isRequired}
    fieldId={`select-field-${name}`}
  >
    {multi ? <MultipleSelectInput {...props} /> : <SingleSelectInput {...props} />}
  </FormGroup>
)

export default SelectInput
