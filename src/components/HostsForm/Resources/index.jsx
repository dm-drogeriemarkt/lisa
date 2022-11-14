import React, { Fragment } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import T from 'i18n-react';
import Preset from './Preset';
import Manual from './Manual';
import {
  Tabs,
  Tab,
  TabContent,
  TabTitleText,
  TextContent,
  Text,
  TextVariants
} from '@patternfly/react-core';
import { pluginsExtensions } from '../../../plugins'
import { formSettings } from '../../../settings'

const Resources = () => {
  const { control } = useFormContext();

  const cpu = useController({
    control,
    name: 'cpu',
    rules: {
      required: true
    }
  });
  const memory = useController({
    control,
    name: 'memory',
    rules: {
      required: true
    }
  });
  const size = useController({
    control,
    name: 'size',
    rules: {
      required: true
    }
  });
  const operatingsystemId = useController({
    control,
    name: 'operatingsystemId',
    rules: {
      required: true
    }
  });

  const fields = { cpu, memory, size, operatingsystemId }

  const JSXextensions = pluginsExtensions.filter(({ slot }) => {
    return slot === 'HostsForm/Resources'
  }).map(({ extension }, i) => {
    return extension({ key: i })
  })

  return (
    <Fragment>
      { JSXextensions }

      <TextContent className='pf-u-my-xl'>
        <Text component={TextVariants.h3}>
          {T.translate('hosts_form.resources.header')}
        </Text>

        <Text component={TextVariants.p}>
          {T.translate('hosts_form.resources.description')}
        </Text>
      </TextContent>

      { formSettings.presetResources.length ? (
        <Tabs defaultActiveKey={0} mountOnEnter>
          <Tab eventKey={0} title={<TabTitleText>{T.translate('hosts_form.resources.preset')}</TabTitleText>}>
            <TabContent className='pf-u-my-lg'>
              <Preset fields={fields} />
            </TabContent>
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>{T.translate('hosts_form.resources.manual')}</TabTitleText>}>
            <TabContent className='pf-u-my-lg'>
              <Manual fields={fields} />
            </TabContent>
          </Tab>
        </Tabs>
      ) : (
        <Manual fields={fields} />
      )}
    </Fragment>
  )
}

export default Resources
