import React from 'react';
import T from 'i18n-react';
import {
  Bullseye,
  Button,
  Card,
  Split,
  SplitItem,
  TextContent,
  Text,
  TextVariants
} from '@patternfly/react-core';
import InfoAltIcon from '@patternfly/react-icons/dist/esm/icons/info-alt-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';

const Default = ({ name, enableCustomView }) => (
  <Card isFlat className='pf-v5-u-my-xl pf-v5-u-p-lg'>
    <Split hasGutter>
      <SplitItem>
        <Bullseye>
          <InfoAltIcon size='lg' />
        </Bullseye>
      </SplitItem>
      <SplitItem isFilled>
        <TextContent>
          <Text component={TextVariants.h5}>
            {T.translate(`hosts_form.${name}.default.header`)}
          </Text>
          <Text component={TextVariants.p}>
            {T.translate(`hosts_form.${name}.default.content`)}
          </Text>
          <Text component={TextVariants.p}>
            <Button
              onClick={enableCustomView}
              variant="link"
              icon={<AngleRightIcon />}
              iconPosition="right"
              isInline
            >
              {T.translate(`hosts_form.${name}.default.link`)}
            </Button>
          </Text>
        </TextContent>
      </SplitItem>
    </Split>
  </Card>
)

export default Default;
