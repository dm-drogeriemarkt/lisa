import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import DashboardContainer from './DashboardContainer';
import NewHostContainer from './NewHostContainer';
import HostContainer from './HostContainer'
import LoginContainer from './LoginContainer';

const Router = () => {
  return (
    <main>
      <Routes>
        <Route exact path='/' element={
          <AuthenticatedRoute>
            <DashboardContainer />
          </AuthenticatedRoute>
        }/>
        <Route exact path='/hosts-new' element={
          <AuthenticatedRoute>
            <NewHostContainer />
          </AuthenticatedRoute>
        }/>
        <Route exact path='/host/:id' element={
          <AuthenticatedRoute>
            <HostContainer />
          </AuthenticatedRoute>
        }/>
        <Route exact path='/login' element={<LoginContainer />} />
      </Routes>
    </main>
  )
}

export default Router;
