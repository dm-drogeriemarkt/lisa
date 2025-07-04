import React, { useEffect, useMemo } from 'react'
import T from 'i18n-react';
import { get } from 'lodash'
import { useFormContext, useController } from 'react-hook-form'
import { useLazyQuery } from '@apollo/client'
import {
  FormGroup,
  TextInput,
  ValidatedOptions,
  HelperText,
  HelperTextItem,
  FormHelperText
} from '@patternfly/react-core';
import useUser from '../../../../hooks/useUser'
import useLocation from '../../../../hooks/useLocation'
import HOSTNAMES_ALREADY_TAKEN_QUERY from '../../../../graphql/queries/hostnamesAlreadyTaken'

const HostNameInput = ({ number, project, role }) => {
  const fieldName = `hostnames.host${number}`;
  const { token } = useUser();
  const defaultValue = useMemo(() => (`${project}-${role}-${number.toString().padStart(2, '0')}`), [project, role, number]);
  const { control, resetField, trigger, watch } = useFormContext();
  const [locationCode, appTierName] = watch(['locationCode', 'appTierName'])
  const { domainName } = useLocation(locationCode)
  const [queryHostnamesAlreadyTaken] = useLazyQuery(HOSTNAMES_ALREADY_TAKEN_QUERY, { context: { token }, fetchPolicy: 'cache-and-network' });
  const {
    field: { value, onChange },
    fieldState: {
      invalid,
      error: { message: error } = {}
    }
  } = useController({
    control,
    name: fieldName,
    shouldUnregister: true,
    defaultValue: defaultValue,
    rules: {
      required: T.translate('form.validations.required'),
      pattern: {
        value: /^[a-z0-9]+-[a-z0-9]+-[0-9]{2}$/i,
        message: T.translate('form.validations.pattern')
      },
      validate: {
        uniq: async (newValue) => {
          const { data } = await queryHostnamesAlreadyTaken({ variables: {
            first: 1,
            last: 1,
            search: `name=${newValue}.${appTierName}.${domainName}`
          }});

          return !get(data, 'hosts.edges', []).length || T.translate('form.validations.uniq')
        }
      }
    },
  });

  useEffect(() => {
    async function revalidate() {
      await trigger(fieldName);
    }
    resetField(fieldName, { defaultValue });
    revalidate();
  }, [fieldName, defaultValue]);

  const validated = useMemo(() => invalid ? ValidatedOptions.error : ValidatedOptions.success, [invalid])

  return (
    <FormGroup
      label={T.translate('hosts_form.hosts_creation.hosts_names.label', { number })}
      isRequired
      fieldId={`hostname-${number}`}
    >
      <TextInput
        type="text"
        id={`hostname-${number}`}
        value={value}
        onChange={onChange}
        isRequired
      />
      <FormHelperText>
        <HelperText>
          {validated && (
            <HelperTextItem variant="error">
              {error}
            </HelperTextItem>
          )}
        </HelperText>
      </FormHelperText>
    </FormGroup>
  )
}

export default HostNameInput
