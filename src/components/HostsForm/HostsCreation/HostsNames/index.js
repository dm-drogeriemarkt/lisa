import React from 'react';
import T from 'i18n-react';
import HostNameInput from './HostNameInput';

import { HostsFormContext } from 'lib/Context'

const HostsNames = () => (
  <HostsFormContext.Consumer>
    {({ attributes: { role, project, hostCount }}) => {
      if(!role || !project) return
      return (
        <div>
          <h4 className="font-weight-bold">
            {T.translate('hosts_form.hosts_creation.hosts_names.header')}
          </h4>

          <p className="help-block explanation">
            {T.translate('hosts_form.hosts_creation.hosts_names.explanation')}
          </p>

          {[...Array(hostCount)].map((e, i) => (
            <HostNameInput key={i} number={i +1} role={role} project={project} />
          ))}
        </div>
      )
    }}
  </HostsFormContext.Consumer>
)

export default HostsNames

