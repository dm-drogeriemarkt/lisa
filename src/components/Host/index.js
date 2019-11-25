import React from 'react';
import T from 'i18n-react';
import { Grid, Tabs, Tab, Col } from 'patternfly-react';
import { get } from 'lodash';
import { label as location_label, country as location_country } from 'helpers/location';
import { label as domain_label } from 'helpers/domain';
import { description as hardware_description } from 'helpers/hardware';
import Navigation from 'components/Navigation';
import Info from './Info';
import Overview from './Overview';
import './index.css';

const Host = ({
  data: {
    host: {
      name,
      location,
      domain,
      operatingsystem,
      ip,
      ip6,
      factValues
    }
  }
}) => (
  <Grid>
    <Navigation />
    <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2}>
      <Info id='host-detail-info'
        name={name}
        location={{
          name: location_label(location, true),
          country: location_country(location)
        }}
        domain={domain_label(domain)}
        operatingsystem={get(operatingsystem, 'name')}
        hardware={hardware_description(factValues.edges)} />
      <Tabs defaultActiveKey={1} id='host-detail-tabs'>
        <Tab eventKey={1} title={T.translate('host_details.overview.card_label')}>
          <Overview operatingsystem={get(operatingsystem, 'fullname')}
            ip={ip}
            ip6={ip6} />
        </Tab>
      </Tabs>
    </Col>
  </Grid>
)

export default Host;
