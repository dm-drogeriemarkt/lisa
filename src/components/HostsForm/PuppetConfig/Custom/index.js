import React, { Fragment } from 'react'
import Slot from 'components/Slot'
import T from 'i18n-react';
import { Row, Col } from 'patternfly-react'
import PuppetMasterSelectInput from './PuppetMasterSelectInput'
import PuppetEnvSelectInput from './PuppetEnvSelectInput'
import PuppetclassesSelectInput from './PuppetclassesSelectInput'

const Custom = () => {
  const selects = [{
    attributeName: 'puppetMasterId',
    components: [PuppetMasterSelectInput]
  }, {
    attributeName: 'puppetEnvId',
    components: [PuppetEnvSelectInput]
  }, {
    attributeName: 'puppetclassIds',
    components: [PuppetclassesSelectInput]
  }]

  return (
    <Fragment>
      <h3>{T.translate('hosts_form.puppet_config.header')}</h3>
      <Row>
        <Col xs={12} sm={6}>
          <Slot name='HostsForm/PuppetConfig/Custom' elements={selects} />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Custom
