import React, { Component } from 'react';
import { graphql, withApollo } from 'react-apollo';
import { withRouter } from 'react-router-dom'
import { Button, Col, Grid, Row } from 'patternfly-react';
import { get, set, flowRight } from 'lodash';
import { Resources, Location, ServerConfig, PuppetConfig, HostsCreation } from 'components/HostsForm';
import Alert from 'components/Alert';
import Navigation from 'components/Navigation';
import Progress from 'components/HostsForm/Progress';
import HOST_CREATION_FORM_INITIAL_DATA_QUERY from 'graphql/queries/hostCreationFormInitialData';
import SUBNETS_BY_DOMAIN_QUERY from 'graphql/queries/subnetsByDomain';
import COMPUTE_RESOURCE_QUERY from 'graphql/queries/computeResource';
import PUPPET_MASTERS_QUERY from 'graphql/queries/puppetMasters';
import HOSTNAMES_ALREADY_TAKEN_QUERY from 'graphql/queries/hostnamesAlreadyTaken'
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
      hostnamesAlreadyTaken: [],
      createdHosts: [],
      errors: [],
      errorCode: '',
      isValid: false,
      subnets: [],
      progressVisible: false,
      subnetsAreLoading: false,
      puppetMastersAreLoading: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    set(state, 'puppetMasters', props.puppetMasters)
    set(state, 'subnets', props.subnets)
    set(state, 'attributes.domainId', props.domainId)

    if(props.owners.length === 1) {
      const ownerId = get(props.owners, '[0].id')
      set(state, 'attributes.ownerId', ownerId)
    }

    return state
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
      this.validateHostCreationForm();
      this.refreshData(Object.keys(props));
    });
  }

  get currentLocation() {
    return locations.find(({ id }) => id === this.state.attributes.locationId)
  }

  refreshData = (changedAttributes) => {
    if (changedAttributes.includes('locationId')) {
      this.refreshSubnetData();
      this.refreshPuppetMasterData();
    }
    if (changedAttributes.includes('appTierName')) {
      this.refreshSubnetData();
      this.refreshAlreadyTakenHostnames();
    }
    if(changedAttributes.includes('hostNames')) {
      this.refreshAlreadyTakenHostnames();
    }
  }

  refreshSubnetData = () => {
    if (!this.state.attributes.appTierName) { return; }

    this.setState({ subnetsAreLoading: true }, () => {
      this.props.refetchSubnets({
        search: `name=${this.state.attributes.appTierName}.${this.currentLocation.domainName} and location = ${this.currentLocation.location}`,
        location: this.currentLocation.location
      }).then(({ data }) => {
        this.updateAttribute({ domainId: get(data, 'domains.edges.0.node.id') })
        const subnets = get(data, 'domains.edges.0.node.subnets.edges', [])
          .map(({ node: { id, name, vlanid }}) => ({ id, name, vlanid }))
        this.setState({ subnets, subnetsAreLoading: false })
      })
    })
  }

  refreshPuppetMasterData = () => {
    this.setState({ puppetMastersAreLoading: true }, () => {
      this.props.client.query({
        query: PUPPET_MASTERS_QUERY,
        variables: { search: `feature = Puppet and location = ${this.currentLocation.location}` }
      }).then(({ data }) => {
        const puppetMasters = get(data, 'smartProxies.edges', []).map(({ node: { id, name }}) => ({ id, name }))
        this.setState({ puppetMasters, puppetMastersAreLoading: false })
      });
    })
  }

  refreshAlreadyTakenHostnames = () => {
    const hostnames = Object.values(get(this.state, 'attributes.hostNames', []))

    if(hostnames.length) {
      const { appTierName } = this.state.attributes
      const { domainName } = this.currentLocation
      const maxHostsCount = get(formSettings, 'maxHostsCountValue')
      const search = hostnames.map(name => `name=${name}.${appTierName}.${domainName}`).join(' OR ')

      this.props.client.query({
        query: HOSTNAMES_ALREADY_TAKEN_QUERY,
        variables: {
          first: maxHostsCount,
          last: maxHostsCount,
          search
        }
      }).then(({ data: { hosts: { edges }}}) => {
        const hostnamesAlreadyTaken = edges.map(({ node: { name }}) => name.split('.', 1)[0])
        this.setState({ hostnamesAlreadyTaken }, () => {
          this.validateHostCreationForm()
        })
      })
    }
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
          computeResource,
          owners: this.props.owners,
          subnets: this.state.subnets
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
    const { owners, puppetEnvs } = this.props

    const {
      attributes,
      hostnamesAlreadyTaken,
      puppetMasters,
      subnets,
      subnetsAreLoading,
      puppetMastersAreLoading
    } = this.state

    return {
      owners,
      puppetEnvs,
      attributes,
      hostnamesAlreadyTaken,
      puppetMasters,
      subnets,
      subnetsAreLoading,
      puppetMastersAreLoading,
      currentLocation: this.currentLocation,
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

const { location, domainName } = locations.find(({ id }) => id === formSettings.defaultValues.locationId)

export default flowRight(
  withRouter,
  withApollo,
  graphql(HOST_CREATION_FORM_INITIAL_DATA_QUERY, {
    props: ({ data: { environments, currentUser }}) => {
      const mapElement = ({ node: { id, name }}) => ({ id, name })

      const puppetEnvs = get(environments, 'edges', []).map(mapElement)
      const owners = get(currentUser, 'usergroups.edges', []).map(mapElement)

      return { puppetEnvs, owners }
    }
  }),
  graphql(PUPPET_MASTERS_QUERY, {
    options: {
      variables: {
        search: `feature = Puppet and location = ${location}`
      }
    },
    props: ({ data: { smartProxies }}) => {
      const puppetMasters = get(smartProxies, 'edges', []).map(({ node: { id, name }}) => ({ id, name }))
      return { puppetMasters }
    }
  }),
  graphql(SUBNETS_BY_DOMAIN_QUERY, {
    options: {
      variables: {
        search: `name=${formSettings.defaultValues.appTierName}.${domainName} and location = ${location}`,
        location: location
      }
    },
    props: ({ data: { refetch: refetchSubnets, domains }}) => {
      const domainId = get(domains, 'edges.0.node.id')
      const subnets = get(domains, 'edges.0.node.subnets.edges', [])
        .map(({ node: { id, name, vlanid }}) => ({ id, name, vlanid }))

      return { refetchSubnets, domainId, subnets }
    }
  })
)(NewHostContainer);
