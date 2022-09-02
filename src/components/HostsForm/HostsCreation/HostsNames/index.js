import React, { Fragment } from 'react'
import T from 'i18n-react';
import HostNameInput from './HostNameInput'

const HostsNames = ({ hostsCount, project, role}) => (
  <Fragment>
    { (role && project) && <Fragment>
      <h4 className="font-weight-bold">
        {T.translate('hosts_form.hosts_creation.hosts_names.header')}
      </h4>

      <p className="help-block explanation">
        {T.translate('hosts_form.hosts_creation.hosts_names.explanation')}
      </p>

      {[...Array(hostsCount)].map((e, i) => <HostNameInput key={i} number={i +1} project={project} role={role} />)}
    </Fragment> }
  </Fragment>
)

export default HostsNames
