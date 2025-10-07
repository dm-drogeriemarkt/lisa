import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useAuth } from '../../lib/auth/foreman';
import { Alert, Form, FormGroup, TextInput, Button } from '@patternfly/react-core';
import { get, has } from 'lodash';
import T from 'i18n-react';
import {
  HelperText,
  HelperTextItem,
  FormHelperText
} from '@patternfly/react-core';

function ForemanAuth() {
  const [error, setError] = useState(false)
  const navigate = useNavigate();
  const location = useLocation()
  const { signIn } = useAuth();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = async (credentials) => {
    setError(false)

    try {
      const { data: { signInUser: { token }}} = await signIn(credentials)
      if (token) {
        const from = get(location, 'state.from.pathname', '/')
        navigate(from);
      }
    } catch {
      setError(true)
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {error && <Alert variant="danger" title={T.translate('login.username_or_password_incorrect')} className="pf-v5-u-p-md" />}

      <Controller
        name="username"
        control={control}
        rules={{ required: T.translate('form.validations.required') }}
        render={({ field: { onChange, value } }) => (
          <FormGroup
            label={T.translate('login.username')}
            fieldId="username-id"
            isRequired
          >
            <TextInput
              id="username-id"
              type="text"
              onChange={onChange}
              value={value}
              isRequired
            />
            <FormHelperText>
              <HelperText>
                {!has(errors, 'username.message') || 'error' && (
                  <HelperTextItem variant="error">{get(errors, 'username.message', null)}</HelperTextItem>
                )}
              </HelperText>
            </FormHelperText>
          </FormGroup>
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: T.translate('form.validations.required') }}
        render={({ field: { onChange, value } }) => (
          <FormGroup
            label={T.translate('login.password')}
            fieldId="password-id"
            isRequired
          >
            <TextInput
              id="password-id"
              type="password"
              onChange={onChange}
              value={value}
              isRequired
            />
            <FormHelperText>
              <HelperText>
                {!has(errors, 'password.message') || 'error' && (
                  <HelperTextItem variant="error">{get(errors, 'password.message', null)}</HelperTextItem>
                )}
              </HelperText>
            </FormHelperText>
          </FormGroup>
        )}
      />

      <Button type="submit" variant="primary">{T.translate('form.submit')}</Button>

    </Form>
  )
}
export default ForemanAuth;
