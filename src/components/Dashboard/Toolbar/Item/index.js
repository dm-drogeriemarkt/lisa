import React from 'react';
import './index.scss';

const Item = ({children, className = 'item'}) => (
  <div className={`hosts-list-toolbar-${className}`}>
    { children }
  </div>
)

export default Item;
