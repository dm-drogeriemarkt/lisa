import React, { Component } from 'react';
import { Card as PatternflyCard, CardTitle, CardBody, Icon } from 'patternfly-react';
import T from 'i18n-react';
import './index.css'

import { operatingsystems } from 'settings'
import { HostsFormContext } from 'lib/Context'

class Card extends Component {
  static contextType = HostsFormContext

  updateResources = () => {
    const { operatingsystemId, cpu, memory, size } = this.props;

    this.context.updateAttribute({ operatingsystemId, cpu, memory, size });
  }

  isSelected = () => {
    const { operatingsystemId, cpu, memory, size } = this.props
    const { attributes } = this.context

    return attributes.operatingsystemId === operatingsystemId &&
           attributes.cpu === cpu &&
           attributes.memory === memory &&
           attributes.size === size
  }

  get osName() {
    return operatingsystems.find(({ id }) => id === this.props.operatingsystemId).name
  }

  render() {
    const { cpu, memory, size } = this.props;
    const className = `clickable ${this.isSelected() && 'card-pf-accented'}`;

    return (
      <PatternflyCard className={className} onClick={this.updateResources}>
        <div className="active-icon-wrapper text-right">
          { this.isSelected() && <Icon type='pf' name='ok' /> }
        </div>
        <CardTitle className="text-center">
          { this.osName }
        </CardTitle>
        <CardBody>
          <dl>
            <dt>{ cpu }</dt><dd>{T.translate('hosts_form.cpus')}</dd>
            <dt>{ `${memory} GB` }</dt><dd>{T.translate('hosts_form.ram')}</dd>
            <dt>{ `${size} GB` }</dt><dd>{T.translate('hosts_form.disk')}</dd>
          </dl>
        </CardBody>
      </PatternflyCard>
    )
  }
}

export default Card
