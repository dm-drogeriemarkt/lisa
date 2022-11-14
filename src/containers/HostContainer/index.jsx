import React, { Fragment } from 'react';
import T from 'i18n-react';
import { useQuery } from '@apollo/client'
import { Spinner } from '@patternfly/react-core';
import Breadcrumb from './Breadcrumb';
import Host from '../../components/Host';
import HOST_QUERY from '../../graphql/queries/host';
import Notification from '../../components/Notification';
import useUser from '../../hooks/useUser'
import { useParams } from 'react-router-dom';

const HostContainer = () => {
  const { token } = useUser();
  const { id } = useParams();
  const { data, loading, error } = useQuery(
    HOST_QUERY, { variables: { id }, context: { token }}
  );

  return (
    <Fragment>
      <Breadcrumb data={data} />

      {
        (loading && <Notification><Spinner /></Notification>) ||
        (error && <Notification><h1>{T.translate('dashboard.error')}</h1></Notification>) ||
        <Host data={data} />
      }
    </Fragment>
  )
}

export default HostContainer;
