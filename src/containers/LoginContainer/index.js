import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardGrid,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Row
} from 'patternfly-react';
import T from 'i18n-react';
import Alert from 'components/Alert';
import { login } from 'lib/Auth';
import { KEY_CODES } from 'constants/keycodes';
import './index.css';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit = async () => {
    if (!this.validateForm()) { return }

    const authenticated = await login(this.state);
    if (authenticated) {
      this.redirectAfterAuth();
    } else {
      this.setErrorMessage('login.username_or_password_incorrect');
    }
  }

  redirectAfterAuth() {
    const fromPath = this.props.location.state &&
                     this.props.location.state.from &&
                     this.props.location.state.from.pathname;
    this.props.history.push(fromPath || '/');
  }

  validateForm() {
    if (this.state.username.length === 0 || this.state.password.length === 0) {
      this.setErrorMessage('login.username_and_password_required');
      return false;
    }

    return true;
  }

  handleKeyDown = (keyEvent) => {
    if (keyEvent.keyCode === KEY_CODES.ENTER_KEY) {
      keyEvent.stopPropagation();
      keyEvent.preventDefault();
      this.submit();
    }
  }

  setErrorMessage(message) {
    this.setState(() => ({ errorMessage: T.translate(message) }));
  }

  render() {
    return (
      <CardGrid>
        <Row>
          <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
            <Card className="login">
              <div className="logo" />
              <CardBody>
                <Form horizontal onKeyDown={this.handleKeyDown}>
                  <h1 className="text-center">{T.translate('login.header')}</h1>
                  <Row>
                    <Col xs={8} xsOffset={2}>
                      <FormGroup controlId='username' bsSize='large'>
                        <ControlLabel>
                          {T.translate('login.username')}
                        </ControlLabel>
                        <FormControl
                          name='username'
                          autoFocus
                          placeholder={T.translate('login.username')}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={8} xsOffset={2}>
                      <FormGroup controlId='password' bsSize='large'>
                        <ControlLabel>
                          {T.translate('login.password')}
                        </ControlLabel>
                        <FormControl
                          name='password'
                          type='password'
                          placeholder={T.translate('login.password')}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  { this.state.errorMessage && <Alert type="error" message={this.state.errorMessage} /> }
                  <Row>
                    <Col xs={8} xsOffset={2}>
                      <FormGroup>
                        <Button className="login" bsStyle='primary' bsSize='large' onClick={this.submit}>
                          {T.translate('login.login')}
                        </Button>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardGrid>
    )
  }
}

export default LoginContainer;
