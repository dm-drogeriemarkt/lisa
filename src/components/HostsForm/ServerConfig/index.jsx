import React, { Fragment } from 'react';
import T from 'i18n-react';
import {
  Grid,
  GridItem,
  TextContent,
  Text,
  TextVariants
} from '@patternfly/react-core';
import Descriptions from './Descriptions';
import Selects from './Selects';

const ServerConfig = () => (
  <Fragment>
    <TextContent className='pf-v5-u-my-xl'>
      <Text component={TextVariants.h3}>
        {T.translate('hosts_form.server_config.header')}
      </Text>
    </TextContent>
    <Grid hasGutter>
      <GridItem sm={6}>
        <Selects />
      </GridItem>
      <GridItem sm={6}>
        <Descriptions />
      </GridItem>
    </Grid>
  </Fragment>
)

export default ServerConfig;
