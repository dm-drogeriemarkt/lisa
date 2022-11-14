import React from 'react';
import ReactDOM from 'react-dom';
import './variables.css';
import './index.css';
import App from './containers/App';
import { auth as authSettings } from './settings';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { merge } from 'lodash'

import T from 'i18n-react';
import { ApolloProvider } from '@apollo/client'
import { AuthProvider as ForemanAuthProvider } from './lib/auth/foreman.jsx';
import { AuthProvider as OidcAuthProvider } from './lib/auth/oidc.js';
import GraphqlClient from './graphql/client'

import enJSON from './locales/en.json'
import appTiersEnJSON from './locales/appTiers.en.json'
import { pluginsLocales } from './plugins'

const locales = merge(enJSON, appTiersEnJSON, pluginsLocales)
T.setTexts(locales)

const { oidc: { clientId, authority, scope }} = authSettings;
const redirectUri = `${window.location.origin}/oidc-redirect/`
const oidcConfig = {
  clientId,
  authority,
  scope,
  redirectUri,
  autoSignIn: false,
};

ReactDOM.render((
  <BrowserRouter>
    <ApolloProvider client={GraphqlClient}>
      <OidcAuthProvider {...oidcConfig}>
        <ForemanAuthProvider>
          <App />
        </ForemanAuthProvider>
      </OidcAuthProvider>
    </ApolloProvider>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
