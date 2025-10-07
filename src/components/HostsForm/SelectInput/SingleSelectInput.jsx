import React, { useState } from 'react';
import {
  Select,
  SelectList,
  SelectOption,
  MenuToggle,
  MenuToggleStatus,
  TextInputGroup,
  TextInputGroupMain
} from '@patternfly/react-core';

const SelectInput = ({
  placeholder,
  value,
  options,
  onChange,
  disabled,
  clearable = false,
  searchable = true,
  validated = MenuToggleStatus.default
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  }

  const closeMenu = () => {
    setIsOpen(false);
  }

  const variant = searchable ? "typeahead" : "default";
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

  const toggle = toggleRef =>
    <MenuToggle
      ref={toggleRef}
      isExpanded={isOpen}
      isFullWidth
      isFullHeight
      status={validated}
      variant={variant}
      onClick={onToggleClick}
    >
      <TextInputGroup isPlain>
        <TextInputGroupMain
          value={value}
          id="typeahead-select-input"
          autoComplete="off"
          placeholder={placeholder}
          role="combobox"
          isExpanded={isOpen}
          aria-controls="select-typeahead-listbox"
        />
      </TextInputGroup>
    </MenuToggle>

  return <Select
    toggle={toggle} 
    onSelect={handleChange}
    isOpen={isOpen}
    isOpenChange={(isOpen) => {
      !isOpen && closeMenu();
    }}
    placeholderText={placeholder}
    isDisabled={disabled}
    onClear={clearable ? handleClear : undefined}
  >
    <SelectList>{selectOptions}</SelectList>
  </Select>
}

export default SelectInput
