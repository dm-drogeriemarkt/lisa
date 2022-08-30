import React, { useState } from 'react';
import {
  Select,
  SelectOption,
  SelectVariant,
  ValidatedOptions
} from '@patternfly/react-core';

const SelectInput = ({
  placeholder,
  options,
  value,
  onChange,
  disabled,
  clearable = false,
  searchable = true,
  validated = ValidatedOptions.default
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const variant = searchable ? SelectVariant.typeahead : SelectVariant.single;
  const selectOptions = options.map(({ id, name }, i) => (
    <SelectOption key={i} id={id} value={id}>
      {name}
    </SelectOption>
  ))

  const handleChange = (_event, selection, isPlaceholder) => {
    isPlaceholder ? onChange(null) : onChange(selection)
    setIsOpen(false)
  };

  const handleClear = () => onChange(undefined)

  return <Select
    variant={variant}
    selections={value}
    onSelect={handleChange}
    isOpen={isOpen}
    onToggle={setIsOpen}
    placeholderText={placeholder}
    validated={validated}
    isDisabled={disabled}
    onClear={clearable ? handleClear : undefined}
  >
    {selectOptions}
  </Select>
}

export default SelectInput
