import React from 'react';
import { Col, Grid, Row } from 'patternfly-react';
import RCPagination from 'rc-pagination';
import PaginationLocale from 'rc-pagination/lib/locale/en_GB';
import 'rc-pagination/assets/index.css';
import './index.scss';

const Pagination = ({
  className,
  page,
  totalCount,
  updateAttribute
}) => {
  const handleChange = (current) => {
    updateAttribute({ page: current });
  }

  return (
    <Grid>
      <Row>
        <Col xs={11} xsPush={1} sm={9} smPush={2} mdPush={3} lgPush={3}>
          <RCPagination
            className={className}
            total={totalCount}
            current={page}
            onChange={handleChange}
            locale={PaginationLocale}
          />
        </Col>
      </Row>
    </Grid>
  )
}

export default Pagination;
