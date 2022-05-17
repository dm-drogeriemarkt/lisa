// wrapper in case we need to replace oidc-react

import { auth as authSettings } from 'settings'
import { get } from 'lodash'

export const name = get(authSettings, 'oidc.name')
export const isEnabled = get(authSettings, 'oidc.enabled')

export * from 'oidc-react';
