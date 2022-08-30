import React from 'react';
import Card from './Card';
import { Grid, GridItem } from '@patternfly/react-core';
import { formSettings } from 'settings'

const Preset = ({
  fields: {
    cpu: {
      field: {
        value: cpu,
        onChange: setCpu
      }
    },
    memory: {
      field: {
        value: memory,
        onChange: setMemory
      }
    },
    size: {
      field: {
        value: size,
        onChange: setSize
      }
    },
    operatingsystemId: {
      field: {
        value: operatingsystemId,
        onChange: setOperatingsystemId
      }
    },
  }
}) => (
  <Grid hasGutter sm={12} md={6} xl={4} xl2={3}>
    {formSettings.presetResources.map((values, i) => {
      const onClick = () => {
        setCpu(values.cpu)
        setMemory(values.memory)
        setSize(values.size)
        setOperatingsystemId(values.operatingsystemId)
      }

      const isSelected = operatingsystemId === values.operatingsystemId &&
        cpu === values.cpu &&
        memory === values.memory &&
        size === values.size;

      return (
        <GridItem key={i}>
          <Card values={values} onClick={onClick} isSelected={isSelected} />
        </GridItem>
      )}
    )}
  </Grid>
)

export default Preset;
