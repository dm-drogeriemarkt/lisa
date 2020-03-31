import React, { Fragment, useContext } from 'react'
import T from 'i18n-react';
import HostNameInput from './HostNameInput'
import { HostsFormContext } from 'lib/Context'

const HostsNames = () => {
  const {
    attributes: {
      role,
      project,
      hostCount
    }
  } = useContext(HostsFormContext)

  return (
    <Fragment>
      { (role && project) && <Fragment>
        <h4 className="font-weight-bold">
          {T.translate('hosts_form.hosts_creation.hosts_names.header')}
        </h4>

        <p className="help-block explanation">
          {T.translate('hosts_form.hosts_creation.hosts_names.explanation')}
        </p>

        {[...Array(hostCount)].map((e, i) => <HostNameInput key={i} number={i +1} />)}
      </Fragment> }
    </Fragment>
  )
}

export default HostsNames
