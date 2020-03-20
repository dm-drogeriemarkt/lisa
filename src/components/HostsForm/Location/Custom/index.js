import React, { Fragment, useContext } from 'react'
import T from 'i18n-react'
import { CardGrid, Row, Col } from 'patternfly-react'
import Card from './Card'
import Warning from './Warning'

import { locations } from 'settings'
import { HostsFormContext } from 'lib/Context'

const Custom = () => {
  const {
    attributes: {
      locationId
    }
  } = useContext(HostsFormContext)
  const currentLocation = locations.find(({ id }) => id === locationId)

  return (
    <Fragment>
      <h3>{ T.translate('hosts_form.location.custom.header') }</h3>
      <CardGrid>
        <Row>
          {
            locations.map((location, i) => (
              <Col xs={12} sm={6} md={3} key={i}>
                <Card location={location} />
              </Col>
            ))
          }
        </Row>
      </CardGrid>
      { currentLocation.reducedPerformance === 'true' && (
        <Warning location={currentLocation.location} explanation={currentLocation.explanation} />
      )}
    </Fragment>
  )
}

export default Custom
