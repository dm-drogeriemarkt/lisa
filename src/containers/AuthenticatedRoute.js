import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from '@patternfly/react-core';
import useUser from 'hooks/useUser';
import { get } from 'lodash';

function AuthenticatedRoute({ children }) {
  const location = useLocation();
  const { token } = useUser();

  const search = get(location, 'search', '');
  const searchParams = new URLSearchParams(search.substring(1));
  const isNewSession = searchParams.has('state') &&
    searchParams.has('session_state') &&
    searchParams.has('code');

  if (!token && !isNewSession) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!token && isNewSession) {
    return <Spinner isSVG />
  }

  return children;
}

export default AuthenticatedRoute;
