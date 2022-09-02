import React from 'react';
import T from 'i18n-react';
import { Link } from 'react-router-dom';
import { Breadcrumb as PatternflyBreadcrumb, BreadcrumbItem } from '@patternfly/react-core';
import { get } from 'lodash';

const Breadcrumb = ({ data }) => {
  const activeLabel = get(data, 'host.name', 'Loading...');

  return (
    <PatternflyBreadcrumb>
      <BreadcrumbItem>
        <Link to='/'>{T.translate('navigation.dashboard')}</Link>
      </BreadcrumbItem>
      <BreadcrumbItem to="#" isActive>
        {activeLabel}
      </BreadcrumbItem>
    </PatternflyBreadcrumb>
  )
}

export default Breadcrumb;
