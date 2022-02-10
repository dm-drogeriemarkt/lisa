import React from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Button } from '@patternfly/react-core';
import { get } from 'lodash';
import T from 'i18n-react';
import { useAuth, name } from 'lib/auth/oidc';

const OidcAuth = () => {
  const location = useLocation()
  const { signIn } = useAuth();

  const from = get(location, 'state.from.pathname', '/')
  const redirectUri = `${window.location.origin}${from}`

  const handleClick = () => signIn({ redirect_uri: redirectUri })

  return (
    <Form>
      <Button onClick={handleClick}>{T.translate('login.oidc', { name })}</Button>
    </Form>
  )
}

export default OidcAuth
