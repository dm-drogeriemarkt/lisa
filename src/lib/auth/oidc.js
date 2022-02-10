// wrapper in case we need to replace oidc-react

import { oidcAuth } from 'settings'
import { get, isEmpty } from 'lodash'

export const name = get(oidcAuth, 'name', 'OIDC')
export const isEnabled = !isEmpty(oidcAuth, true)

export * from 'oidc-react';
