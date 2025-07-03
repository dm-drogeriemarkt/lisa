import React, { Fragment } from 'react';
import { get } from 'lodash';
import T from 'i18n-react';
import {
  Card,
  CardTitle,
  CardBody,
  Grid,
  GridItem,
  Tabs,
  Tab,
  TabContent,
  TabTitleText,
  TextContent,
  Text,
  TextVariants,
  TextList,
  TextListVariants,
  TextListItem,
  TextListItemVariants,
} from '@patternfly/react-core';
import LinuxIcon from '@patternfly/react-icons/dist/js/icons/linux-icon';
import WhmcsIcon from '@patternfly/react-icons/dist/js/icons/whmcs-icon';
import ClusterIcon from '@patternfly/react-icons/dist/js/icons/cluster-icon';
import SitemapIcon from '@patternfly/react-icons/dist/js/icons/sitemap-icon';
import MapMarkerAltIcon from '@patternfly/react-icons/dist/js/icons/map-marker-alt-icon';
import Flag from '../../components/FlagIcon'
import { label as location_label, country as location_country } from '../../helpers/location';
import { label as domain_label } from '../../helpers/domain';
import { description as hardware_description } from '../../helpers/hardware';

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
}) => {
  const country = location_country(location)

  const headerItems = [
    {
      label: location_label(location, true),
      Icon: () => country.toUpperCase() ? <Flag code={country.toUpperCase()} /> : <MapMarkerAltIcon />
    },
    {
      label: domain_label(domain),
      Icon: SitemapIcon
    },
    {
      label: get(operatingsystem, 'name'),
      Icon: WhmcsIcon
    },
    {
      label: hardware_description(factValues.edges),
      Icon: ClusterIcon
    }
  ]

  const overviewItems = [
    {
      label: T.translate('host_details.overview.ip'),
      value: ip || T.translate('host_details.overview.not_assigned')
    },
    {
      label: T.translate('host_details.overview.ip6'),
      value: ip6 || T.translate('host_details.overview.not_assigned')
    },
    {
      label: T.translate('host_details.overview.operatingsystem'),
      value: get(operatingsystem, 'fullname')
    }
  ]

  return (
    <Fragment>
      <TextContent className='pf-u-my-xl'>
        <Text component={TextVariants.h2} className='pf-u-text-align-center pf-u-my-xl'>
          <LinuxIcon size="md" /> {name}
        </Text>

        <Grid md={6} lg={3} hasGutter>
          {headerItems.map(({ Icon, label }, i) => (
            <GridItem key={i}>
              <TextList component={TextListVariants.dl}>
                <TextListItem component={TextListItemVariants.dt}>
                  <Icon />
                </TextListItem>
                <TextListItem component={TextListItemVariants.dd}>
                  {label}
                </TextListItem>
              </TextList>
            </GridItem>
          ))}
        </Grid>
      </TextContent>

      <Tabs defaultActiveKey={0} id='host-detail-tabs'>
        <Tab eventKey={0} title={<TabTitleText>{T.translate('host_details.overview.card_label')}</TabTitleText>}>
          <TabContent className='pf-u-my-lg'>
            <Card isLarge isFlat>
              <CardTitle>
                {T.translate('host_details.overview.header')}
              </CardTitle>
              <CardBody>
                <TextContent>
                  <Grid md={6} hasGutter>
                    {overviewItems.map(({ label, value }, i) => (
                      <GridItem key={i}>
                        <TextList component={TextListVariants.dl}>
                          <TextListItem component={TextListItemVariants.dt}>
                            {label}
                          </TextListItem>
                          <TextListItem component={TextListItemVariants.dd}>
                            {value}
                          </TextListItem>
                        </TextList>
                      </GridItem>
                    ))}
                  </Grid>
                </TextContent>
              </CardBody>
            </Card>
          </TabContent>
        </Tab>
      </Tabs>
    </Fragment>
  )
}

export default Host;
