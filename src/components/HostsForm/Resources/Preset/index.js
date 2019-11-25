import React from 'react';
import Card from './Card';
import { CardGrid, Row, Col } from 'patternfly-react';
import './index.css';

import { formSettings } from 'settings'

const Preset = () => (
  <CardGrid>
    <Row>
      { formSettings.presetResources.map((element, i) => (
        <Col key={i} xs={12} sm={6} md={3}>
          <Card
            operatingsystemId={element.operatingsystemId}
            cpu={element.cpu}
            memory={element.memory}
            size={element.size}
          />
        </Col>
      ))}
    </Row>
  </CardGrid>
)

export default Preset;
