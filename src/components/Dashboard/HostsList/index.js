import React, { Component } from 'react';
import T from 'i18n-react';
import { Grid, Row, ListView } from 'patternfly-react';
import Pagination from './Pagination';
import HostItem from './HostItem';
import Notification from 'components/Notification';

class HostsList extends Component {
  renderHostItem(item, index) {
    return (
      <HostItem key={index} host={item} />
    );
  }

  render() {
    const {
      hosts,
      totalCount,
      page,
      updateAttribute
    } = this.props;

    if(totalCount === 0) return (
      <Notification>
        <h1>{T.translate('dashboard.no_hosts_search_info')}</h1>
      </Notification>
    )

    return (
      <Grid>
        <Pagination className='up-pagination' page={page} totalCount={totalCount} updateAttribute={updateAttribute} />
        <Row>
          <ListView>
            { hosts.map(this.renderHostItem) }
          </ListView>
        </Row>
        <Pagination className='down-pagination' page={page} totalCount={totalCount} updateAttribute={updateAttribute} />
      </Grid>
    )
  }
}

export default HostsList;
