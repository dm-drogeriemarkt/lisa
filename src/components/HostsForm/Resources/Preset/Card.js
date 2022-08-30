import React, { Fragment } from 'react';
import {
  Card as PatternflyCard,
  CardTitle,
  CardBody,
  TextContent,
  TextList,
  TextListVariants,
  TextListItem,
  TextListItemVariants,
} from '@patternfly/react-core';
import T from 'i18n-react';
import { operatingsystems } from 'settings'

const Card = ({
  values: {
    operatingsystemId,
    cpu,
    memory,
    size,
  },
  onClick,
  isSelected
}) => {
  const osName = operatingsystems.find(({ id }) => id === operatingsystemId).name;

  const items = [
    { label: T.translate('hosts_form.cpus'), value: cpu },
    { label: T.translate('hosts_form.ram'), value: `${memory} GB` },
    { label: T.translate('hosts_form.disk'), value: `${size} GB` }
  ];

  return (
    <PatternflyCard
      onClick={onClick}
      isSelected={isSelected}
      isSelectableRaised
      isCompact
      isFullHeight
      isFlat
      className='pf-u-text-align-center'
    >
      <CardTitle>{osName}</CardTitle>
      <CardBody>
        <TextContent>
          <TextList component={TextListVariants.dl}>
            {items.map(({ label, value }, i) => (
              <Fragment key={i}>
                <TextListItem component={TextListItemVariants.dt} className='pf-u-ml-auto'>
                  {value}
                </TextListItem>
                <TextListItem component={TextListItemVariants.dd} className='pf-u-mr-auto'>
                  {label}
                </TextListItem>
              </Fragment>
            ))}
          </TextList>
        </TextContent>
      </CardBody>
    </PatternflyCard>
  )
}

export default Card;
