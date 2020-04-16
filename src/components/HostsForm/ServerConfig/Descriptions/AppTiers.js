import React, { Fragment } from 'react'
import T from 'i18n-react'
import { appTiers } from 'settings'

const Descriptions = () => (
  <Fragment>
    <h4>{T.translate('app_tiers.label')}</h4>
    <ul style={style}>
      {
        appTiers.map(({ name }, i) => (
          <li key={i}>{T.translate(`app_tiers.${name}`)}</li>
        ))
      }
    </ul>
  </Fragment>
)

const style = {
  listStyleType: 'none',
  padding: 0
}

export default Descriptions
