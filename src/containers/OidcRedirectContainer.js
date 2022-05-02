import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Spinner } from '@patternfly/react-core';
import useOidcUser from 'hooks/useUser';
import { status as checkApiStatus } from 'lib/foremanApi';

function OidcRedirectContainer() {
  const [isAuthorized, setIsAuthorized] = useState(null)
  const { token } = useOidcUser();

  useEffect(() => {
    if(token) {
      const asyncCallback = async () =>{
        const isTokenValid = await checkApiStatus(token)
        setIsAuthorized(isTokenValid);
      }
      asyncCallback()
    }
  }, [token]);

  if(isAuthorized === true) {
    return <Navigate to="/" replace />
  }

  if(isAuthorized === false) {
    return <Navigate to="/login" replace />
  }

  return <Spinner />
}

export default OidcRedirectContainer;
