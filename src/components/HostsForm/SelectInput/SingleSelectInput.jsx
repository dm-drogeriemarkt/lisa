import React, { useState } from 'react';
import { ValidatedOptions, FormSelect, FormSelectOption } from '@patternfly/react-core';

const SelectInput = ({
  placeholder,
  options,
  value,
  onChange,
  disabled,
  validated = ValidatedOptions.default
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange(newValue); // Notify the parent component of the change
  };

  const selectOptions = options.map(({ id, name }) => (
    <FormSelectOption key={id} value={id} label={name} />
  ));

  return (
    <FormSelect
      value={selectedValue}
      onChange={handleChange}
      aria-label={placeholder}
      isDisabled={disabled}
      validated={validated}
    >
      {selectOptions}
    </FormSelect>
  );
}

export default SelectInput
