import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useAuth } from 'lib/auth/foreman';
import { Alert, Form, FormGroup, TextInput, Button } from '@patternfly/react-core';
import { get, has } from 'lodash';
import T from 'i18n-react';

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
      {error && <Alert variant="danger" title={T.translate('login.username_or_password_incorrect')} />}

      <Controller
        name="username"
        control={control}
        rules={{ required: T.translate('form.validations.required') }}
        render={({ field: { onChange, value } }) => (
          <FormGroup
            label={T.translate('login.username')}
            fieldId="username-id"
            helperTextInvalid={get(errors, 'username.message', null)}
            validated={!has(errors, 'username.message') || 'error'}
            isRequired
          >
            <TextInput
              id="username-id"
              type="text"
              onChange={onChange}
              value={value}
              isRequired
            />
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
            helperTextInvalid={get(errors, 'password.message', null)}
            validated={!has(errors, 'password.message') || 'error'}
            isRequired
          >
            <TextInput
              id="password-id"
              type="password"
              onChange={onChange}
              value={value}
              isRequired
            />
          </FormGroup>
        )}
      />

      <Button type="submit" variant="primary">Submit</Button>

    </Form>
  )
}
export default ForemanAuth;
