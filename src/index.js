import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { merge } from 'lodash'

import '../node_modules/patternfly/dist/css/patternfly.css';
import '../node_modules/patternfly/dist/css/patternfly-additions.css';
import '../node_modules/patternfly-react/dist/css/patternfly-react.css';
import 'react-select/dist/react-select.css';

import T from 'i18n-react';
import { ApolloProvider } from 'react-apollo'
import GraphqlClient from './graphql/client'

import enJSON from './locales/en.json'
import appTiersEnJSON from './locales/appTiers.en.json'
import { pluginsLocales } from './plugins'

const locales = merge(enJSON, appTiersEnJSON, pluginsLocales)
T.setTexts(locales)

ReactDOM.render((
  <ApolloProvider client={GraphqlClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
), document.getElementById('root'));
registerServiceWorker();
