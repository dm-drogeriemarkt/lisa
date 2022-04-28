import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { auth as authSettings } from './settings';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { merge } from 'lodash'

import '@patternfly/react-core/dist/styles/base.css';
import 'patternfly/dist/css/patternfly.css';
import 'patternfly/dist/css/patternfly-additions.css';
import 'patternfly-react/dist/css/patternfly-react.css';
import 'react-select/dist/react-select.css';

import T from 'i18n-react';
import { ApolloProvider } from '@apollo/client'
import { AuthProvider as ForemanAuthProvider } from 'lib/auth/foreman';
import { AuthProvider as OidcAuthProvider } from 'lib/auth/oidc';
import GraphqlClient from './graphql/client'

import enJSON from './locales/en.json'
import appTiersEnJSON from './locales/appTiers.en.json'
import { pluginsLocales } from './plugins'

const locales = merge(enJSON, appTiersEnJSON, pluginsLocales)
T.setTexts(locales)

const { oidc: { clientId, authority }} = authSettings;
const oidcConfig = { clientId, authority, autoSignIn: false };

ReactDOM.render((
  <ApolloProvider client={GraphqlClient}>
    <BrowserRouter>
      <ForemanAuthProvider>
        <OidcAuthProvider {...oidcConfig}>
          <App />
        </OidcAuthProvider>
      </ForemanAuthProvider>
    </BrowserRouter>
  </ApolloProvider>
), document.getElementById('root'));
registerServiceWorker();
