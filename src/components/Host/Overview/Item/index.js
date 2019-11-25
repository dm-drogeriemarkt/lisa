import React from 'react';
import './index.css';

const Item = ({label, text}) => (
  <div>
    <label className='item-label text-right'>{label}:</label> {text}   
  </div>
)

export default Item;
