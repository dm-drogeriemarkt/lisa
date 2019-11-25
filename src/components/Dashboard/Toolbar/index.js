import React, { Component } from 'react';
import T from 'i18n-react';
import { Grid, Row, Col, Toolbar, Sort, FormControl, Button, Icon } from 'patternfly-react';
import { Link } from 'react-router-dom';
import { KEY_CODES } from 'constants/keycodes';
import Item from './Item';
import './index.scss';

const NAME_FIELD = 'name';
const WAIT_INTERVAL = 500;
const ASCENDING_SORT_DIRECTION = 'ASC';
const DESCENDING_SORT_DIRECTION = 'DESC';

class HostsToolbar extends Component {
  UNSAFE_componentWillMount() {
    this.inputTimer = null;
  }

  toggleCurrentSortDirection = () => {
    const newSortDirection = this.isAscendingOrder ? DESCENDING_SORT_DIRECTION : ASCENDING_SORT_DIRECTION;

    this.props.updateAttribute({ sortDirection: newSortDirection });
  }

  get isAscendingOrder() {
    return this.props.sortDirection === ASCENDING_SORT_DIRECTION
  }

  updateFilterValue = (event) => {
    clearTimeout(this.inputTimer);

    this.props.updateAttribute({ filterValue: event.target.value }, false);

    this.inputTimer = setTimeout(this.triggerFilterUpdate, WAIT_INTERVAL);
  }

  handleFilterKeyDown = (keyEvent) => {
    if (keyEvent.keyCode === KEY_CODES.ENTER_KEY) {
      keyEvent.stopPropagation();
      keyEvent.preventDefault();
      this.triggerFilterUpdate();
    }
  }

  triggerFilterUpdate = () => {
    const { filterValue, updateAttribute, defaultSearch: search, defaultSortField: sortBy } = this.props;

    if (filterValue) {
      updateAttribute({
        search: `${NAME_FIELD} ~ "${filterValue}"`,
        sortBy: NAME_FIELD
      });
    } else {
      updateAttribute({ search, sortBy });
    }
  }

  render() {
    return (
      <Grid>
        <Row id='hosts-list-toolbar'>
          <Toolbar>
            <Col xs={6}>
              <Icon type='pf' name='search' />
              <FormControl
                placeholder={T.translate('dashboard.toolbar.filter_placeholder')}
                value={this.props.filterValue}
                onChange={this.updateFilterValue}
                onKeyDown={this.handleFilterKeyDown}
                className='search'
              />
            </Col>
            <Col xs={6}>
              <Item className='container'>
                <Item>
                  <Sort>
                    <Sort.DirectionSelector
                      isNumeric={false}
                      isAscending={this.isAscendingOrder}
                      onClick={this.toggleCurrentSortDirection}
                    />
                  </Sort>
                </Item>
                <Item>
                  <Link to='/hosts-new'>
                    <Button bsStyle='primary'>
                      {T.translate('dashboard.toolbar.create_hosts')}
                    </Button>
                  </Link>
                </Item>
              </Item>
            </Col>
          </Toolbar>
        </Row>
      </Grid>
    )
  }
}

export default HostsToolbar;
