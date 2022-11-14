import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLazyQuery, useMutation } from '@apollo/client';
import { FormProvider, useForm } from 'react-hook-form';
import {
  Alert,
  Button,
  TextContent,
  Text,
  TextVariants,
  TextList,
  TextListItem,
  Tooltip
} from '@patternfly/react-core';
import InfoAltIcon from '@patternfly/react-icons/dist/esm/icons/info-alt-icon';
import useUser from '../../hooks/useUser';
import { Resources, Location, ServerConfig, PuppetConfig, HostsCreation } from '../../components/HostsForm';
import Progress from '../../components/HostsForm/Progress';
import COMPUTE_RESOURCE_QUERY from '../../graphql/queries/computeResource';
import CREATE_HOST_MUTATION from '../../graphql/mutations/createHost';
import hostsCreateParams from '../../helpers/hostsCreateParams';
import T from 'i18n-react';
import { formSettings, locations } from '../../settings';
import Breadcrumb from './Breadcrumb';

function NewHostContainer() {
  const navigate = useNavigate();
  const { token } = useUser();
  const [createdHosts, setCreatedHosts] = useState([]);
  const [failedToCreateHosts, setFailedToCreateHosts] = useState([]);
  const [progressDuration, setProgressDuration] = useState(0);

  const [getComputeResource] = useLazyQuery(COMPUTE_RESOURCE_QUERY, { context: { token }});
  const [createHost] = useMutation(
    CREATE_HOST_MUTATION,
    { context: { token }}
  );
  const { defaultValues } = formSettings;
  const form = useForm({
    mode: 'all',
    defaultValues
  });
  const redirectToDashboard = () => navigate('/');

  const { isValid, isSubmitting } = form.formState;

  const onSubmit = async (data) => {
    const newProgressDuration = data.hostnames.length * formSettings.hostCreationDuration;
    setProgressDuration(newProgressDuration);
    setFailedToCreateHosts([]);

    try {
      const { data: { computeResource }} = await getComputeResource({ variables: { id: data.computeResourceId }});

      const results = await Promise.all(
        hostsCreateParams(data, { computeResource })
          .filter(({ name }) => !createdHosts.includes(name))
          .map((variables) => createHost({ variables })
            .then(({ data: { createHost: { host: { name }, errors } } }) => ({ name, errors }))
            .catch(error => ({ name: variables.name, errors: [error.toString()] }))
          )
      );

      const [created, failed] = results.reduce((memo, result) => (
        result.errors.length > 0 ? [memo[0], [...memo[1], result]] : [[...memo[0], result], memo[1]]
      ), [[], []]);

      if(failed.length) {
        setCreatedHosts(created);
        setFailedToCreateHosts(failed);
      } else {
        redirectToDashboard()
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <FormProvider {...form} >
      <Breadcrumb />

      <TextContent>
        <Text component={TextVariants.h1} className='pf-u-text-align-center'>
          {T.translate('hosts_form.create_hosts_header')}
        </Text>
      </TextContent>

      <form onSubmit={(e) => e.preventDefault()}>
        <Resources />
        {locations.length > 1 && <Location />}
        <ServerConfig />
        <PuppetConfig />
        <HostsCreation />

        <div className='pf-u-text-align-center'>
          <Button
            variant='primary'
            isDisabled={!isValid}
            onClick={form.handleSubmit(onSubmit)}
          >
            {T.translate('hosts_form.create_hosts_button')}
          </Button>

          {!isValid && <p className="help-block">{T.translate('hosts_form.create_hosts_button_info')}</p>}
        </div>

        {isSubmitting && <Progress duration={progressDuration} title={T.translate('form.progress')} />}

        {createdHosts.length > 0 && (
          <Alert variant='success' title={T.translate('hosts_form.created_hosts_success')} className='pf-u-mt-lg' isInline>
            <TextContent>
              <TextList>
                {createdHosts.map(({ name }, i) => <TextListItem key={i}>{name}</TextListItem>)}
              </TextList>
            </TextContent>
          </Alert>
        )}

        {failedToCreateHosts.length > 0 && (
          <Alert variant='danger' title={T.translate('hosts_form.created_hosts_danger')} className='pf-u-mt-lg' isInline>
            <TextContent>
              <TextList>
                {failedToCreateHosts.map(({ name, errors}, i) => (
                  <TextListItem key={i}>
                    <span className='pf-u-mr-sm'>{name}</span>
                    <Tooltip aria="none" aria-live="polite" content={<span>{errors.map(({ message }) => message).join('. ')}</span>}>
                      <InfoAltIcon color="var(--pf-global--danger-color--100)" />
                    </Tooltip>
                  </TextListItem>
                ))}
              </TextList>
            </TextContent>
          </Alert>
        )}
      </form>
    </FormProvider>
  )
}

export default NewHostContainer;
