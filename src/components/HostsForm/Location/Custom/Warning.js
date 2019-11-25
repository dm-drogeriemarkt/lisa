import React from 'react';
import T from 'i18n-react';
import { CardGrid, Row, Col, Card, CardTitle, CardBody, Icon } from 'patternfly-react';

const Warning = ({ location, explanation }) => {
  const name = `${location} - ${explanation}`;  

  return (
    <CardGrid>
      <Row>
        <Col xs={12}>
          <Card>
            <Row>
              <Col xs={2} className="icon-wrapper text-center">
                <Icon type='pf' name='warning-triangle-o' />
              </Col>
              <Col xs={10}>
                <CardTitle>
                  { name }
                </CardTitle>
                <CardBody>
                  {T.translate('hosts_form.location.custom.warning', { location: name })}
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </CardGrid>
  )
}

export default Warning;
