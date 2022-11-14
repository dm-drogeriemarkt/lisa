// wrapper in case we need to replace oidc-react

import { auth as authSettings } from '../../settings'
import { get } from 'lodash'
import {
  useAuth as useOidcAuth,
  AuthProvider as OidcAuthProvider
} from 'oidc-react'

export const name = get(authSettings, 'oidc.name')
export const isEnabled = get(authSettings, 'oidc.enabled')
export const useAuth = useOidcAuth
export const AuthProvider = OidcAuthProvider

// export * from 'oidc-react';
