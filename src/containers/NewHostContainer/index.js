import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { withRouter } from 'react-router-dom'
import { Button, Col, Grid, Row } from 'patternfly-react';
import { flowRight } from 'lodash';
import { Resources, Location, ServerConfig, PuppetConfig, HostsCreation } from 'components/HostsForm';
import Alert from 'components/Alert';
import Navigation from 'components/Navigation';
import Progress from 'components/HostsForm/Progress';
import COMPUTE_RESOURCE_QUERY from 'graphql/queries/computeResource';
import CREATE_HOST_MUTATION from 'graphql/mutations/createHost';
import hostsCreateParams from 'helpers/hostsCreateParams';
import { parseErrorMessage, parseErrorCode } from 'helpers/graphqlErrorParser';
import T from 'i18n-react';

import { formSettings, locations } from 'settings';
import { HostsFormContext } from 'lib/Context'

class NewHostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attributes: {
        hostCount: 1,
        ...formSettings.defaultValues
      },
      createdHosts: [],
      errors: [],
      errorCode: '',
      isValid: false,
      progressVisible: false
    };
  }

  updateAttribute = (props) => {
    const { attributes } = this.state;

    for (const [name, value] of Object.entries(props)) {
      if (!value || (Array.isArray(value) && !value.length)) {
        attributes[name] = undefined;
      } else {
        attributes[name] = value;
      }
    }

    this.setState({ attributes }, () => {
      this.validateHostCreationForm()
    });
  }

  get currentLocation() {
    return locations.find(({ id }) => id === this.state.attributes.locationId)
  }

  validateHostCreationForm() {
    const isValid = this.hostCreationFormRef.checkValidity();
    this.setState({ isValid });
  }

  submit = async (event) => {
    event.preventDefault()

    const progressDuration = this.state.attributes.hostCount * formSettings.hostCreationDuration
    this.setState({ progressDuration });

    try {
      this.setState({ errors: [], errorCode: '', progressVisible: true });

      const { data: { computeResource }} = await this.props.client.query({
        query: COMPUTE_RESOURCE_QUERY,
        variables: {
          id: this.currentLocation.relations.computeResourceId
        }
      })

      const hostsParams = hostsCreateParams(
        this.state.attributes,
        {
          computeResource
        }
      )

      hostsParams.forEach((params, i) => {
        const hostNumber = i + 1;

        if (!this.state.createdHosts.find((h) => h.number === hostNumber)) {
          this.props.client.mutate({
            mutation: CREATE_HOST_MUTATION,
            variables: params
          }).then(({ data }) => this.submitSuccess(data, hostNumber))
            .catch(error => this.submitError(error, hostNumber))
        }
      })
    } catch (e) {
      console.log(e);
      if (e.name === 'HostParamsError') {
        this.setState({ errors: [e.message], progressVisible: false });
      } else {
        this.setState({ errors: [T.translate('hosts_form.errors.host_params.default')], progressVisible: false });
      }
    }
  }

  submitSuccess(data, hostNumber) {
    const createdHosts = this.state.createdHosts.concat([
      {
        number: hostNumber,
        name: data.createHost.host.name
      }
    ]);

    this.setState({
      createdHosts: createdHosts,
      progressVisible: false
    })

    if(createdHosts.length >= this.state.attributes.hostCount) {
      this.props.history.push('/')
    }
  }

  submitError(error, hostNumber) {
    const errorCode = parseErrorCode(error);
    const errors = this.state.errors;

    this.setState({
      errorCode,
      errors: errors.concat([`Host ${hostNumber}: ${parseErrorMessage(error)}`]),
      progressVisible: false
    });
  }

  errorMessage() {
    const { errors, errorCode  } = this.state
    return(
      <div>
        {errors.map((error, i) =>
          <div key={i}>
            <span>{error}</span>
            <br/>
          </div>
        )}
        { errorCode && <span>{T.translate('hosts_form.error_code')} {errorCode}</span> }
      </div>
    );
  }

  successMessage() {
    return(
      <div>
        <span>{T.translate('hosts_form.created_hosts')}</span>
        {this.state.createdHosts.map((host, i) =>
          <div key={i}>
            <br/>
            <span>{T.translate('hosts_form.host')} {host.number}: {host.name}</span>
          </div>
        )}
      </div>
    );
  }

  get contextValue() {
    const {
      attributes
    } = this.state

    return {
      attributes,
      updateAttribute: this.updateAttribute
    }
  }

  render() {
    return (
      <HostsFormContext.Provider value={this.contextValue}>
        <Grid>
          <Navigation />
          <Row>
            <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2}>
              <h1 className="text-center">{T.translate('hosts_form.create_hosts_header')}</h1>
            </Col>
          </Row>
          <form ref={(ref) => this.hostCreationFormRef = ref} className="form-horizontal" onSubmit={this.submit}>
            <Row>
              <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2}>
                <Resources />
                { locations.length > 1 && <Location />}
                <ServerConfig />
                <PuppetConfig />
                <HostsCreation />
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} className="text-center">
                <Button bsStyle='primary' bsSize='large' type='submit' disabled={!this.state.isValid || this.state.progressVisible}>
                  {T.translate('hosts_form.create_hosts_button')}
                </Button>
                { !this.state.isValid && <p className="help-block">{ T.translate('hosts_form.create_hosts_button_info') }</p> }
                {
                  (this.state.progressVisible && (
                    <Progress duration={this.state.progressDuration} />
                  )) || (
                    <Row>
                      <Col xs={10} xsOffset={1}>
                        { !!this.state.createdHosts.length &&
                          <Alert type="success" message={this.successMessage()} />
                        }
                        { (this.state.errorCode || this.state.errors.length > 0) && <Alert type="error" message={this.errorMessage()} /> }
                      </Col>
                    </Row>
                  )
                }
              </Col>
            </Row>
          </form>
        </Grid>
      </HostsFormContext.Provider>
    )
  }
}

export default flowRight(
  withRouter,
  withApollo
)(NewHostContainer);
