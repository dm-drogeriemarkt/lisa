import React, { useState } from 'react';
import {
  ValidatedOptions
} from '@patternfly/react-core';
import {
  Select,
  SelectOption,
} from '@patternfly/react-core';

const SelectInput = ({
  placeholder,
  options,
  value=[],
  onChange,
  disabled,
  clearable = false,
  required = true,
  searchable = true,
  validated = ValidatedOptions.default
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const variant = searchable ? "typeaheadMulti" : "checkbox";
  const selectOptions = options.map(({ id, name }, i) => (
    <SelectOption key={i} id={id} value={id}>
      {name}
    </SelectOption>
  ))

  const handleSelect = (selection) => {
    const newValue = [...value, selection]
    onChange(newValue)
  }

  const handleDeselect = (selection) => {
    const newValue = value.filter(item => item !== selection)
    onChange(newValue)
  }

  const handleChange = (_event, selection) => {
    const handler = value.includes(selection) ? handleDeselect : handleSelect
    handler(selection)
    setIsOpen(false)
  };

  const handleClear = () => onChange([]);

  return <Select
    variant={variant}
    selections={value}
    onSelect={handleChange}
    isOpen={isOpen}
    onToggle={(_event, val) => setIsOpen(val)}
    placeholderText={placeholder}
    validated={validated}
    isDisabled={disabled}
    onClear={!required || clearable ? handleClear : undefined}
  >
    {selectOptions}
  </Select>
}

export default SelectInput
