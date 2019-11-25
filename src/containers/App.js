import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/navbar';
import Router from './router';
import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar {...this.props}/>
        <Router />
      </div>
    );
  }
}

export default withRouter(App);
