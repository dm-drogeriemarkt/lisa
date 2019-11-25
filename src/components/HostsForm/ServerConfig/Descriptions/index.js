import React from 'react';
import T from 'i18n-react';
import './index.css';
import { appTiers } from 'settings'

const Descriptions = () => (
  <ul className="server-config-descriptions">
    <li>{T.translate('app_tiers.label')}</li>
    {
      appTiers.map(({ name }, i) => (
        <li key={i}>{T.translate(`app_tiers.${name}`)}</li>
      ))
    }
  </ul>
)

export default Descriptions;
