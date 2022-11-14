import React, { useState } from 'react'
import { useFormContext, useController } from 'react-hook-form';
import Default from '../Default'
import Custom from './Custom'

const Location = () => {
  const { control } = useFormContext();
  const locationCode = useController({
    control,
    name: 'locationCode',
    defaultValue: null,
    rules: {
      required: true
    }
  });
  const [customView, setCustomView] = useState(false)
  const enableCustomView = () => setCustomView(true)

  return customView ? <Custom locationCode={locationCode} /> : <Default name='location' enableCustomView={enableCustomView} />
}

export default Location
