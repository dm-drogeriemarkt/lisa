import React from 'react';
import NotificationGfx from './lisa-notification-gfx.min.svg';
import './index.scss';

const Notification = ({children}) => (
  <div className='notification text-center'>
    <img src={NotificationGfx} className='App-logo' alt='logo' />
    { children }
  </div>
)

export default Notification;
