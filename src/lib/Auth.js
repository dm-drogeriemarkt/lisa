import { signInUser } from '../graphql';

export function isAuthenticated() {
  return !!localStorage.getItem('token');
}

export function login(args) {
  return signInUser({
    username: args['username'],
    password: args['password']
  }).then(({ data }) => {
    if (data.signInUser && data.signInUser.token) {
      localStorage.setItem('token', data.signInUser.token)
      localStorage.setItem('username', data.signInUser.user.fullname)
      return true;
    } else {
      return false;
    }
  })
}

export function logout() {
  localStorage.removeItem('token', null);
  localStorage.removeItem('username', null);
}

export function getUsername() {
  return localStorage.getItem('username');
}
