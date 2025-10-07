# Patternfly 5 Migration

This document highlights the migration process from Patternfly 4 to Patternfly 5, detailing the updates made across the codebase to ensure compatibility and adherence to the newer API.

## Removed Deprecated Components
The following components previously imported from `@patternfly/react-core/deprecated` were identified and removed:
- `PageHeader`
- `PageHeaderTools`
- `DropdownItem` (previously from `/deprecated`, now moved to `/react-core`)
- `SelectVariant`
- `KebabToggle`
- `DropdownPosition`

## Replacements in Patternfly 5
The updated components and configurations used as replacements include:
- **`Masthead` Structure:**
  - Replaced `PageHeader` with the `<Masthead>` component.
  - Used `<MastheadBrand>` and `<MastheadToggle>` for branding and navigation tools.
- **Dropdown Integration:**
  - Updated toggle to `Dropdown`'s built-in `toggleText`.
  - Removed `KebabToggle` and replaced it with `onToggle` provided by `Dropdown`.
- **Select Component Variants:**
  - Replaced `SelectVariant` classifications with string literals (`"typeahead"`, `"checkbox"`, etc.).

## Validation and Testing
- The updated components were tested to ensure functionality and compatibility with Patternfly 5 APIs.
- Full application build successfully completed after migration.
