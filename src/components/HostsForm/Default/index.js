import React from 'react';
import T from 'i18n-react';
import { CardGrid, Row, Col, Card, CardTitle, CardBody, Icon } from 'patternfly-react';
import './index.scss';

const Default = ({ name, enableCustomView }) => (
  <CardGrid>
    <Row>
      <Col xs={12}>
        <Card>
          <Row>
            <Col xs={2} className="icon-wrapper text-center">
              <Icon type='pf' name='info' />
            </Col>
            <Col xs={10}>
              <CardTitle>
                {T.translate(`hosts_form.${name}.default.header`)}
              </CardTitle>
              <CardBody>
                <p>{T.translate(`hosts_form.${name}.default.content`)}</p>
                <button className='btn btn-link' onClick={enableCustomView}>{T.translate(`hosts_form.${name}.default.link`)}</button>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </CardGrid>
)

export default Default;
