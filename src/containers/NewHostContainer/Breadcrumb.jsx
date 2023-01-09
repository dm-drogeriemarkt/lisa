import React from 'react';
import T from 'i18n-react';
import { Link } from 'react-router-dom';
import { Breadcrumb as PatternflyBreadcrumb, BreadcrumbItem } from '@patternfly/react-core';

const Breadcrumb = () => (
  <PatternflyBreadcrumb>
    <BreadcrumbItem>
      <Link to='/'>{T.translate('navigation.dashboard')}</Link>
    </BreadcrumbItem>
    <BreadcrumbItem to="#" isActive>
      {T.translate('navigation.new_host') }
    </BreadcrumbItem>
  </PatternflyBreadcrumb>
)

export default Breadcrumb;
