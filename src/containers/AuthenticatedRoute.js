import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../lib/Auth';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)

export default AuthenticatedRoute;
