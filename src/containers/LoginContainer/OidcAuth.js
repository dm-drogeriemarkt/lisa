import React from 'react';
import { Form, Button } from '@patternfly/react-core';
import T from 'i18n-react';
import { useAuth, name } from 'lib/auth/oidc';

const OidcAuth = () => {
  const { signIn } = useAuth();

  const handleClick = () => signIn()

  return (
    <Form>
      <Button onClick={handleClick}>{T.translate('login.oidc', { name })}</Button>
    </Form>
  )
}

export default OidcAuth
