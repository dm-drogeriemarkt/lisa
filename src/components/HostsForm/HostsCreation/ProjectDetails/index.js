import React from 'react';
import T from 'i18n-react';
import Input from './Input';
import TouchspinInput from './TouchspinInput';

const ProjectDetails = () => (
  <div>
    <h4 className="font-weight-bold">
      { T.translate('hosts_form.hosts_creation.project_details.header') }
    </h4>

    <p className="help-block explanation">
      { T.translate('hosts_form.hosts_creation.project_details.explanation') }
    </p>

    <Input attributeName='project' />
    <Input attributeName='role' />
    <TouchspinInput attributeName='hostCount' />
  </div>
)

export default ProjectDetails;
