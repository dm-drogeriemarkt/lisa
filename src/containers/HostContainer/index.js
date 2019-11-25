import React from 'react';
import T from 'i18n-react';
import { Query } from 'react-apollo';
import { Spinner } from 'patternfly-react';
import Host from 'components/Host';
import HOST_QUERY from 'graphql/queries/host';
import Notification from 'components/Notification';

const HostContainer = (ownProps) => (
  <div className='text-center'>
    <Query query={HOST_QUERY} variables={{ id: ownProps.match.params.id }}>
      {({ data, loading, error }) => {
        if (loading) return <Notification><Spinner loading /></Notification>
        if (error) return <Notification><h1>{T.translate('dashboard.error')}</h1></Notification>

        return <Host data={data} />
      }}
    </Query>
  </div>
);

export default HostContainer;
