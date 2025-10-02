import React, { Fragment, useState, useMemo, useEffect } from 'react';
import { useFormContext, useController } from 'react-hook-form'
import T from 'i18n-react';
import {
  Grid,
  GridItem,
  Text,
  TextContent,
  TextVariants,
  FormGroup,
  NumberInput,
  TextInput,
  ValidatedOptions
} from '@patternfly/react-core';
import HostsNames from './HostsNames';
import { formSettings } from '../../../settings'

const HostsCreation = () => {
  const [hostsCount, setHostsCount] = useState(1);
  const onPlus = () => setHostsCount(hostsCount + 1)
  const onMinus = () => setHostsCount(hostsCount - 1)
  const maxHostCount = parseInt(formSettings.maxHostsCountValue, 10)

  const { control, trigger } = useFormContext();

  const {
    field: {
      value: project,
      onChange: setProject
    },
    fieldState: {
      invalid: projectInvalid
    }
  } = useController({
    control,
    name: 'project',
    defaultValue: '',
    rules: {
      required: true,
      pattern: /^[a-z0-9]+$/i
    }
  });

  const {
    field: {
      value: role,
      onChange: setRole
    },
    fieldState: {
      invalid: roleInvalid
    },
  } = useController({
    control,
    name: 'role',
    defaultValue: '',
    rules: {
      required: true,
      pattern: /^[a-z0-9]+$/i
    }
  });

  useEffect(() => {
    trigger('project')
    trigger('role')
  }, []);

  const projectValidated = useMemo(() => projectInvalid ? ValidatedOptions.error : ValidatedOptions.success, [projectInvalid]);
  const roleValidated = useMemo(() => roleInvalid ? ValidatedOptions.error : ValidatedOptions.success, [roleInvalid]);

  return (
    <Fragment>
      <TextContent className='pf-v5-u-my-xl'>
        <Text component={TextVariants.h3}>
          {T.translate('hosts_form.hosts_creation.header')}
        </Text>
        <Text component={TextVariants.p}>
          {T.translate('hosts_form.hosts_creation.description')}
        </Text>
      </TextContent>
      <Grid hasGutter>
        <GridItem sm={6}>
          <TextContent>
            <Text component={TextVariants.h4}>
              {T.translate('hosts_form.hosts_creation.project_details.header')}
            </Text>

            <Text component={TextVariants.p}>
              {T.translate('hosts_form.hosts_creation.project_details.explanation')}
            </Text>
          </TextContent>

          <FormGroup
            label={T.translate('hosts_form.hosts_creation.project_details.project')}
            fieldId={'fieldId-project'}
            isRequired
          >
            <TextInput
              id="project"
              value={project}
              type="text"
              onChange={setProject}
              validated={projectValidated}
              isRequired
            />
          </FormGroup>

          <FormGroup
            label={T.translate('hosts_form.hosts_creation.project_details.role')}
            fieldId={'fieldId-role'}
            isRequired
          >
            <TextInput
              id="role"
              value={role}
              type="text"
              onChange={setRole}
              validated={roleValidated}
              isRequired
            />
          </FormGroup>

          <FormGroup
            label={T.translate('hosts_form.host_count')}
            fieldId={'fieldId-host_count'}
            isRequired
          >
            <NumberInput
              value={hostsCount}
              min={1}
              max={maxHostCount}
              onPlus={onPlus}
              onMinus={onMinus}
              widthChars={3}
              inputProps={{ disabled: true }}
            />
          </FormGroup>
        </GridItem>
        <GridItem sm={6}>
          <HostsNames hostsCount={hostsCount} project={project} role={role} />
        </GridItem>
      </Grid>
    </Fragment>
  )
}

export default HostsCreation;
