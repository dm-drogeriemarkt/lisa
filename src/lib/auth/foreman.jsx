import React, { useState, useEffect, useContext, createContext } from 'react';
import { useMutation } from '@apollo/client';
import { auth as authSettings } from '../../settings'
import SIGN_IN_USER from '../../graphql/mutations/signInUser';
import { get } from 'lodash';

function useProvideAuth() {
  const [userData, setUserData] = useState(null);
  const [signInMutation, { data, loading, error }] = useMutation(SIGN_IN_USER);

  useEffect(() => {
    const signInUser = get(data, 'signInUser', null)
    setUserData(signInUser)
  }, [data])

  const signIn = ({ username, password }) => signInMutation({ variables: { username, password }});
  const signOut = () => setUserData(null);

  return {
    userData,
    loading,
    error,
    signIn,
    signOut
  };
}

export const isEnabled = get(authSettings, 'foreman.enabled');
export const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};
