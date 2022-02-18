import { ApolloClient, InMemoryCache, ApolloLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { BatchHttpLink } from '@apollo/client/link/batch-http';

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem('token')
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null
    }
  }));

  return forward(operation);
})

// eslint-disable-next-line no-undef
const httpLink = new BatchHttpLink({ uri: process.env.REACT_APP_GRAPHQL_API_URL });

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path, errors }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, Errors: ${errors}`,
      ),
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const Client = new ApolloClient({
  link: from([ authMiddleware, errorLink, httpLink ]),
  cache: new InMemoryCache()
})

export default Client;
