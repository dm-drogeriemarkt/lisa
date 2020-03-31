import React, { Fragment, useContext, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { get } from 'lodash'
import { Col, FormGroup, FormControl, ControlLabel, Icon } from 'patternfly-react'

import HOSTNAMES_ALREADY_TAKEN_QUERY from 'graphql/queries/hostnamesAlreadyTaken'
import { HostsFormContext } from 'lib/Context'
import { locations } from 'settings'

const HostNameInput = ({ number }) => {
  const {
    updateAttribute,
    attributes: {
      role,
      project,
      appTierName,
      locationId,
      hostNames = {}
    }
  } = useContext(HostsFormContext)

  const hostNumber = number.toString().padStart(2, '0')
  const defaultValue = `${project}-${role}-${hostNumber}`
  const value = get(hostNames, `name_${number}`, defaultValue)

  const { domainName } = locations.find(({ id }) => id === locationId)
  const { data, loading } = useQuery(HOSTNAMES_ALREADY_TAKEN_QUERY, {
    variables: {
      first: 1,
      last: 1,
      search: `name=${value}.${appTierName}.${domainName}`
    },
    skip: !value
  })

  const updateValue = (value) => {
    hostNames[`name_${number}`] = value ? value : undefined
    Object.keys(hostNames).forEach((key) => {
      hostNames[key] === undefined && delete hostNames[key]
    })
    updateAttribute({ hostNames })
  }

  const setDefaultValueEffect = () => {
    updateValue(defaultValue)

    return () => updateValue(undefined)
  }
  useEffect(setDefaultValueEffect, [role, project])

  const handleChange = ({ target: { value }}) => updateValue(value)
  const ensureValueSet = ({ target: { value }}) => {
    if(!value) {
      updateValue(defaultValue)
    }
  }

  const alreadyTaken = get(data, 'hosts.edges[0].node.name')
  const alreadyTakenPattern = alreadyTaken ? `(?!${value})` : ''
  const pattern = `^${alreadyTakenPattern}[a-z0-9]+-[a-z0-9]+-[0-9]{2}$`

  return (
    <FormGroup controlId='name' bsSize='large'>
      <Col xs={12}>
        <ControlLabel>
          { `Host ${number} Name` }
        </ControlLabel>
      </Col>
      <Col xs={12}>
        <FormControl
          value={value}
          onChange={handleChange}
          onBlur={ensureValueSet}
          bsClass='Select-control input-separator'
          pattern={pattern}
          maxLength='63'
          required
        />
        { loading ? <Icon type='pf' name='spinner' /> : <Fragment>
          <Icon type='pf' name='ok' />
          <Icon type='pf' name='error-circle-o' /> 
        </Fragment> }
      </Col>
    </FormGroup>
  )
}

export default HostNameInput
