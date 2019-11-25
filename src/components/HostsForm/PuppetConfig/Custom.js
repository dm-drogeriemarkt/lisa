import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import T from 'i18n-react';
import { get } from 'lodash';
import { Row, Col } from 'patternfly-react';
import SelectInput from 'components/HostsForm/SelectInput';

import PUPPET_CLASSES_BY_ENVIRONMENT_QUERY from 'graphql/queries/puppetClassesByEnvironment';

import { HostsFormContext } from 'lib/Context'

class Custom extends Component {
  static contextType = HostsFormContext

  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.fetchSubnetOptions(this.context.attributes.puppetEnvId);
  }

  fetchSubnetOptions = (puppetEnvId) => {
    if(!puppetEnvId) return []

    this.setState({ loading: true }, () => {
      this.props.client.query({
        query: PUPPET_CLASSES_BY_ENVIRONMENT_QUERY,
        variables: { id: puppetEnvId }
      }).then(({ data }) => {
        const puppetclassesOptions = get(data, 'environment.puppetclasses.edges', [])
          .map(({ node: { id, name }}) => ({ id, name }));

        this.setState({ puppetclassesOptions, loading: false })
      });
    });
  }

  updatePuppetEnv = ({ puppetEnvId }) => {
    this.fetchSubnetOptions(puppetEnvId);
    this.context.updateAttribute({ puppetEnvId, puppetclassIds: [] });
  }

  render() {
    return (
      <div>
        <h3>{T.translate('hosts_form.puppet_config.header')}</h3>
        <Row>
          <Col xs={12} sm={6}>
            <SelectInput
              attributeName='puppetMasterId'
              value={this.context.attributes.puppetMasterId}
              updateAttribute={this.context.updateAttribute}
              options={this.context.puppetMasters}
              loading={this.context.puppetMastersAreLoading}
            />

            <SelectInput
              attributeName='puppetEnvId'
              value={this.context.attributes.puppetEnvId}
              updateAttribute={this.updatePuppetEnv}
              options={this.context.puppetEnvs}
            />

            <SelectInput
              attributeName='puppetclassIds'
              value={this.context.attributes.puppetclassIds}
              updateAttribute={this.context.updateAttribute}
              options={this.state.puppetclassesOptions}
              loading={this.state.loading}
              multi={true}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default withApollo(Custom);
