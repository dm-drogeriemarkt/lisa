import React from 'react';
import { Icon } from 'patternfly-react';
import './index.scss';

const InfoItem = ({iconType, iconClass, description, className, ...rest}) => (
  <div className={`info-item ${className}`} {...rest}>
    <Icon type={iconType} name={iconClass} /> { description }
  </div>
)

export default InfoItem;
