import React from 'react';
import { Brand, Card, CardTitle, CardBody, Flex, FlexItem } from '@patternfly/react-core';
import ForemanAuth from './ForemanAuth'
import OidcAuth from './OidcAuth'
import { isEnabled as isOidcAuthEnabled } from '../../lib/auth/oidc';
import { isEnabled as isForemanAuthEnabled } from '../../lib/auth/foreman';
import logo from './assets/LISA-logo-claim-white-m.jpg'
import { css } from '@patternfly/react-styles'
import alignment from '@patternfly/react-styles/css/utilities/Alignment/alignment.js'
import sizing from '@patternfly/react-styles/css/utilities/Sizing/sizing.js'
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing.js'

const LoginContainer = () => (
  <Card isCompact isFlat className={css(sizing.w_50, spacing.mxAuto, spacing.pXl)}>
    <CardTitle>
      <Brand src={logo} alt="LISA" className={css(sizing.w_50, alignment.textAlignCenter)} />
    </CardTitle>
    <CardBody>
      <Flex direction={{ default: 'column' }}>
        { isForemanAuthEnabled &&
          <FlexItem>
            <ForemanAuth />
          </FlexItem>
        }
        { isOidcAuthEnabled &&
          <FlexItem>
            <OidcAuth />
          </FlexItem>
        }
      </Flex>
    </CardBody>
  </Card>
)

export default LoginContainer;
