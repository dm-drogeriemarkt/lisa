export function parseErrorMessage(error) {
  if (error.networkError) {
    return `[Network error]: ${error.networkError}`;
  }

  const graphQLError = error.graphQLErrors[0];
  const { message, errors } = graphQLError;

  if (errors) {
    return errors.join(', ');
  }

  if (message) {
    return message;
  }

  return 'unknown error';
}

export function parseErrorCode(error) {
  const graphQLError = error.graphQLErrors[0];

  if (graphQLError === undefined) {
    return '-';
  }

  const { requestId } = graphQLError;

  if (requestId) {
    return requestId.split('-')[0];
  }

  return '-';
}
