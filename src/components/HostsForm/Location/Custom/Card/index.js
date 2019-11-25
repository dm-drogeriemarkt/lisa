import React, { Component } from 'react';
import { Card as PatternflyCard, CardTitle, CardBody, Icon, Col } from 'patternfly-react';
import FlagIcon from 'components/FlagIcon';
import './index.css';

import { locations } from 'settings'
import { HostsFormContext } from 'lib/Context'

class Card extends Component {
  static contextType = HostsFormContext

  updateLocation = () => {
    const {
      attributes: {
        datastoreTypeId
      },
      updateAttribute
    } = this.context;

    let newAttributes = { locationCode: this.location.code }
    if (!this.location.datastoreTypes.some(({ id }) => id === datastoreTypeId)) {
      newAttributes['datastoreTypeId'] = this.location.datastoreTypes[0].id;
    }
    updateAttribute(newAttributes);
  }

  get location() {
    return locations.find(({ code }) => code === this.props.code);
  }

  isSelected = () => {
    return this.props.code === this.context.currentLocation.code
  }

  reducedPerformance = () => {
    return this.location.label.reducedPerformance === 'true';
  }

  render() {
    return (
      <PatternflyCard className={ `location clickable ${this.isSelected() && 'card-pf-accented'}`} onClick={this.updateLocation}>
        <div className="active-icon-wrapper">
          <Col xs={6}>
            { this.reducedPerformance() && <Icon type='pf' name='info' /> }
          </Col>
          <Col xs={6} className="text-right">
            { this.isSelected() && <Icon type='pf' name='ok' /> }
          </Col>
        </div>
        <CardTitle className="text-center">
          <FlagIcon code={this.location.country} size={'4x'} />
        </CardTitle>
        <CardBody className="text-center">
          <p className="location">{ this.location.label.location }</p>
          <p className="explanation">{ this.location.label.explanation }</p>
        </CardBody>
      </PatternflyCard>
    )
  }
}

export default Card;
