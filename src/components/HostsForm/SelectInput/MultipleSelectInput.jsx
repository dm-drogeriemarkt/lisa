import React, { useState } from 'react';
import { ValidatedOptions, Select, SelectOption } from '@patternfly/react-core';

const SelectInput = ({
  placeholder,
  options,
  value=[],
  onChange,
  disabled,
  validated = ValidatedOptions.default
}) => {
  const [selectedValues, setSelectedValues] = useState(value);

  const handleChange = (event, value, isPlaceholder) => {
    if (isPlaceholder) {
      setSelectedValues([]);
      onChange([]);
    } else {
      setSelectedValues(value);
      onChange(value);
    }
  };

  const selectOptions = options.map(({ id, name }, i) => (
    <SelectOption key={i} value={id} label={name} hasCheckbox/>
  ));

  return (
    <Select
      aria-label={placeholder}
      onSelect={handleChange}
      value={selectedValues}
      isDisabled={disabled}
      validated={validated}
      isCheckboxSelect
      isMultiSelect
      role="menu"
    >
      {selectOptions}
    </Select>
  );
}

export default SelectInput
