import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from 'lib/Auth';

function AuthenticatedRoute({ children }) {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default AuthenticatedRoute;

