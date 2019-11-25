import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import DashboardContainer from './DashboardContainer';
import NewHostContainer from './NewHostContainer';
import HostContainer from './HostContainer'
import LoginContainer from './LoginContainer';

const Router = () => (
  <main>
    <Switch>
      <AuthenticatedRoute exact path='/' component={DashboardContainer}/>
      <AuthenticatedRoute exact path='/hosts-new' component={NewHostContainer}/>
      <AuthenticatedRoute exact path='/host/:id' component={HostContainer}/>
      <Route exact path='/login' component={LoginContainer}/>
    </Switch>
  </main>
)

export default Router;
