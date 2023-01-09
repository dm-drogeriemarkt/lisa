import React from 'react'
import T from 'i18n-react'
import {
  Alert,
  Grid,
  GridItem,
  Text,
  TextContent,
  TextVariants
} from '@patternfly/react-core';
import Card from './Card'
import { locations } from '../../../../settings'
import useLocation from '../../../../hooks/useLocation'

const Custom = ({
  locationCode: {
    field: {
      value: locationCode,
      onChange: setLocationCode
    }
  }
}) => {
  const {
    label: {
      location: currentLocation,
      explanation,
      reducedPerformance
    }
  } = useLocation(locationCode)

  const locationName = `${currentLocation} - ${explanation}`; 

  return (
    <TextContent>
      <Text component={TextVariants.h3}>
        { T.translate('hosts_form.location.custom.header') }
      </Text>
      <Grid hasGutter sm={12} md={6} xl={4} xl2={3}>
        {locations.map((location, i) => (
          <GridItem key={i}>
            <Card location={location} setLocationCode={setLocationCode} />
          </GridItem>
        ))}
      </Grid>
      {reducedPerformance && (
        <Alert variant="warning" title={locationName} className='pf-u-mt-lg' isInline>
          {T.translate('hosts_form.location.custom.warning', { location: locationName })}
        </Alert>
      )}
    </TextContent>
  )
}

export default Custom
