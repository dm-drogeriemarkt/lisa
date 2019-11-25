import gql from 'graphql-tag';

export default gql`
  mutation SignInUserMutation ($username: String!, $password: String!) {
    signInUser(input: {username: $username, password: $password}) {
      token
      user {
        fullname
      }
    }
  }
`;
