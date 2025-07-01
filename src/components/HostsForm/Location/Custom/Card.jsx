import React from 'react'
import { useFormContext } from 'react-hook-form'
import {
  Card as PatternflyCard,
  CardTitle,
  CardBody,
  CardFooter
} from '@patternfly/react-core';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import Flag from '../../../FlagIcon'
const Card = ({
  setLocationCode,
  location: {
    code,
    country,
    datastoreTypes,
    label: {
      location,
      explanation,
      reducedPerformance
    },
    relations: {
      computeResourceId
    }
  }
}) => {
  const { setValue, watch } = useFormContext();

  const [currentLocationCode, datastoreTypeId] = watch(['locationCode', 'datastoreTypeId']);

  const isSelected = code === currentLocationCode

  const handleClick = () => {
    setLocationCode(code)
    setValue('computeResourceId', computeResourceId)
    if (!datastoreTypes.some(({ id }) => id === datastoreTypeId)) {
      setValue('datastoreTypeId', datastoreTypes[0].id)
    }
  }

  return (
    <PatternflyCard
      onClick={handleClick}
      isSelected={isSelected}
      isSelectableRaised
      isCompact
      isFlat
      isFullHeight
      className='pf-u-text-align-center'
    >
      <CardTitle>
        {location} {reducedPerformance && <ExclamationTriangleIcon color="var(--pf-global--warning-color--100)
" />}
      </CardTitle>
      <CardBody>
        <Flag code={country.toUpperCase()} size={'m'} />
      </CardBody>
      <CardFooter>
        {explanation}
      </CardFooter>
    </PatternflyCard>
  )
}

export default Card
