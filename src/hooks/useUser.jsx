import { get } from 'lodash'
import { auth as authSettings } from '../settings'
import { isEnabled, useAuth as useOidcAuth } from '../lib/auth/oidc'
import { useAuth as useForemanAuth } from '../lib/auth/foreman'

export function useForemanUser() {
  const { userData, signOut } = useForemanAuth();

  return userData ? {
    username: get(userData, 'user.fullname', null),
    token: get(userData, 'token', null),
    signOut
  } : null
}

export function useOidcUser() {
  const { userData, signOut } = useOidcAuth();

  if(!isEnabled) {
    return null
  }

  const usernameKey = get(authSettings, 'oidc.usernameKey')

  return userData ? {
    username: get(userData, usernameKey, null),
    token: get(userData, 'access_token', null),
    signOut
  } : null
}

function useUser() {
  const foremanUser = useForemanUser()
  const oidcUser = useOidcUser()

  return oidcUser || foremanUser || {}
}

export default useUser
