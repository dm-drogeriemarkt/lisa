import React, { useContext } from 'react'
import classNames from 'classnames'
import { Card as PatternflyCard, CardTitle, CardBody, Icon, Col } from 'patternfly-react'
import FlagIcon from 'components/FlagIcon'
import './index.css'

import { HostsFormContext } from 'lib/Context'

const Card = ({
  location: {
    code,
    country,
    datastoreTypes,
    label
  }
}) => {
  const {
    attributes: {
      locationCode: currentLocationCode,
      datastoreTypeId
    },
    updateAttribute
  } = useContext(HostsFormContext)

  const isSelected = code === currentLocationCode
  const reducedPerformance = label.reducedPerformance === 'true'

  const handleClick = () => {
    let newAttributes = { locationCode: code }
    if (!datastoreTypes.some(({ id }) => id === datastoreTypeId)) {
      newAttributes['datastoreTypeId'] = datastoreTypes[0].id
    }
    updateAttribute(newAttributes)
  }

  return (
    <PatternflyCard onClick={ handleClick }
      className={ classNames('location', 'clickable', { 'card-pf-accented': isSelected }) } >
      <div className="active-icon-wrapper">
        <Col xs={6}>
          { reducedPerformance && <Icon type='pf' name='info' /> }
        </Col>
        <Col xs={6} className="text-right">
          { isSelected && <Icon type='pf' name='ok' /> }
        </Col>
      </div>
      <CardTitle className="text-center">
        <FlagIcon code={ country } size={'4x'} />
      </CardTitle>
      <CardBody className="text-center">
        <p className="location">{ label.location }</p>
        <p className="explanation">{ label.explanation }</p>
      </CardBody>
    </PatternflyCard>
  )
}

export default Card
