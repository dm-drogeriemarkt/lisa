import { get } from 'lodash';

export function parseErrorMessage(error) {
  if (error.networkError) {
    return `[Network error]: ${error.networkError}`;
  }

  const { message, errors } = get(error, 'graphQLErrors.0', {});

  if (errors) {
    return errors.join(', ');
  }

  if (message) {
    return message;
  }

  return 'unknown error';
}

export function parseErrorCode(error) {
  const { requestId } = get(error, 'graphQLErrors.0', {});

  if (requestId) {
    return requestId.split('-')[0];
  }

  return '-';
}
