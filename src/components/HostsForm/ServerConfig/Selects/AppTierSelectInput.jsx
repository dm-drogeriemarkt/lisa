import React, { useMemo } from 'react'
import { ValidatedOptions } from '@patternfly/react-core';
import { useFormContext, useController } from 'react-hook-form';
import T from 'i18n-react'
import SelectInput from '../../SelectInput'
import { appTiers as appTiersSettings } from '../../../../settings'

const AppTierSelectInput = ({ name='appTierName', required = true, ...attrs }) => {
  const { control, resetField } = useFormContext();
  const {
    field: {
      value,
      onChange: setAppTierName
    },
    fieldState: {
      invalid
    }
  } = useController({
    control,
    name,
    rules: {
      required: required
    }
  })

  const validated = useMemo(() => invalid ? ValidatedOptions.error : ValidatedOptions.success, [invalid])

  const onChange = (newValue) => {
    setAppTierName(newValue)
    resetField('subnetId', { keepDirty: true })
  }

  const options = appTiersSettings.map(({ name }) => ({ id: name, name }))

  return (
    <SelectInput
      label={T.translate('hosts_form.app_tier_name')}
      placeholder={T.translate('hosts_form.placeholders.app_tier_name')}
      value={value}
      options={options}
      onChange={onChange}
      validated={validated}
      isRequired={required}
      {...attrs}
    />
  )
}

export default AppTierSelectInput
