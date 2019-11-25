import React from 'react';
import T from 'i18n-react';
import { CardGrid, Row, Col } from 'patternfly-react';
import Card from './Card';
import Warning from './Warning';

import { locations } from 'settings'
import { HostsFormContext } from 'lib/Context'

const Custom = () => (
  <HostsFormContext.Consumer>
    {({
      currentLocation: {
        label: {
          location,
          explanation,
          reducedPerformance
        }
      }
    }) => (
      <div>
        <h3>{T.translate('hosts_form.location.custom.header')}</h3>
        <CardGrid>
          <Row>
            {
              locations.map(({ code }, i) => (
                <Col xs={12} sm={6} md={3} key={i}>
                  <Card code={code} />
                </Col>
              ))
            }
          </Row>
        </CardGrid>
        { reducedPerformance === 'true' && ( <Warning location={location} explanation={explanation} /> ) }
      </div>
    )}
  </HostsFormContext.Consumer>
)

export default Custom;
