import React from 'react';
import InfoItem from 'components/InfoItem';
import FlagIcon from 'components/FlagIcon';

const LocationItem = ({
  location: {
    name,
    country
  },
  ...rest
}) => {
  if(country) {
    return (
      <div {...rest}>
        <FlagIcon code={country} /> { name }
      </div>
    )
  } else {
    return (<InfoItem iconType='fa' iconClass='map-marker' description={name} {...rest} />)
  }
}

export default LocationItem;
