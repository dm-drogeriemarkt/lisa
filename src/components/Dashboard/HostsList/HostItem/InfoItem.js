import React from 'react';
import { ListViewInfoItem } from 'patternfly-react';
import InfoItemBase from 'components/InfoItem';

const InfoItem = ({ iconType, iconClass, description }) => (
  <ListViewInfoItem>
    <InfoItemBase iconType={iconType} iconClass={iconClass} description={description} />
  </ListViewInfoItem>
)

export default InfoItem;
