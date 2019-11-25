import React from 'react';
import { Alert as PatternflyAlert, Col, FormGroup, Row } from 'patternfly-react';
import './index.css';

const Alert = ({ type, message }) => (
  <Row>
    <Col xs={8} xsOffset={2}>
      <FormGroup>
        <PatternflyAlert type={type}>
          { message }
        </PatternflyAlert>
      </FormGroup>
    </Col>
  </Row>
)

export default Alert;
