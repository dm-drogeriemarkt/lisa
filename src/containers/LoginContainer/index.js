import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import './index.css';

const LoginContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const validateForm = () => {
    if (username.length === 0 || password.length === 0) {
      setErrorMessage('login.username_and_password_required');
      return false;
    }

    return true;
  }

  const submit = async () => {
    if (!validateForm()) { return }

    const authenticated = await login({ username, password });
    if (authenticated) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } else {
      setErrorMessage('login.username_or_password_incorrect');
    }
  }

  return (
    <CardGrid>
      <Row>
        <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
          <Card className="login">
            <div className="logo" />
            <CardBody>
              <Form horizontal>
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
                        onChange={({ target: { value } }) => setUsername(value)}
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
                        onChange={({ target: { value } }) => setPassword(value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                { errorMessage && <Alert type="error" message={errorMessage} /> }
                <Row>
                  <Col xs={8} xsOffset={2}>
                    <FormGroup>
                      <Button className="login" bsStyle='primary' bsSize='large' onClick={submit}>
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

export default LoginContainer;
