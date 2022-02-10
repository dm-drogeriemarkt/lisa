import React from 'react';
import T from 'i18n-react';
import { useQuery } from '@apollo/client'
import { Spinner } from 'patternfly-react';
import Host from 'components/Host';
import HOST_QUERY from 'graphql/queries/host';
import Notification from 'components/Notification';
import useUser from 'hooks/useUser'
import { useParams } from 'react-router-dom';

const HostContainer = () => {
  const { token } = useUser();
  const { id } = useParams();
  const { data, loading, error } = useQuery(
    HOST_QUERY, { variables: { id }, context: { token }}
  );

  return (
    <div className='text-center'>
      {
        (loading && <Notification><Spinner loading /></Notification>) ||
        (error && <Notification><h1>{T.translate('dashboard.error')}</h1></Notification>) ||
        <Host data={data} />
      }
    </div>
  )
}

export default HostContainer;
