import client from './client';
import signInUserMutation from './mutations/signInUser';

export function signInUser(params) {
  return client.mutate({
    mutation: signInUserMutation,
    variables: params
  });
}
