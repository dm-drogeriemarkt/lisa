import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useUser from 'hooks/useUser';

function AuthenticatedRoute({ children }) {
  const location = useLocation();
  const { token } = useUser();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default AuthenticatedRoute;
