import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Alert, Form, Button } from '@patternfly/react-core';
import { get } from 'lodash';
import T from 'i18n-react';
import { useAuth, name } from '../../lib/auth/oidc';

const OidcAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [oidcError] = useState(get(location, 'state.oidcError', false))
  const [fromLocation] = useState(get(location, 'state.from.pathname', '/'))
  const { signIn } = useAuth();

  useEffect(() => {
    if(oidcError) {
      navigate(location.pathname, { replace: true });
    }
  }, [oidcError]);


  const handleClick = () => {
    sessionStorage.setItem('oidcRedirectUri', fromLocation)

    signIn();
  }

  return (
    <Form>
      {oidcError && <Alert variant="danger" title={T.translate('login.oidc_error', { name })} className="pf-u-mt-xl pf-u-p-md" />}
      <Button onClick={handleClick}>{T.translate('login.oidc', { name })}</Button>
    </Form>
  )
}

export default OidcAuth
