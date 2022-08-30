import React from 'react'
import Slot from 'components/Slot'
import T from 'i18n-react';
import {
  Grid,
  GridItem,
  Text,
  TextContent,
  TextVariants
} from '@patternfly/react-core'
import PuppetMasterSelectInput from './PuppetMasterSelectInput'
import PuppetEnvSelectInput from './PuppetEnvSelectInput'
import PuppetclassesSelectInput from './PuppetclassesSelectInput'

const Custom = () => {
  const selects = [{
    name: 'puppetMasterId',
    components: [PuppetMasterSelectInput]
  }, {
    name: 'puppetEnvId',
    components: [PuppetEnvSelectInput]
  }, {
    name: 'puppetclassIds',
    components: [PuppetclassesSelectInput]
  }]

  return (

    <TextContent>
      <Text component={TextVariants.h3}>
        {T.translate('hosts_form.puppet_config.header')}
      </Text>
      <Grid hasGutter>
        <GridItem sm={6}>
          <Slot name='HostsForm/PuppetConfig/Custom' elements={selects} />
        </GridItem>
      </Grid>
    </TextContent>
  )
}

export default Custom
