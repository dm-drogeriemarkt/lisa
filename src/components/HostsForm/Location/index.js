import React, { useState } from 'react'
import Default from 'components/HostsForm/Default'
import Custom from './Custom'

const Location = () => {
  const [customView, setCustomView] = useState(false)
  const enableCustomView = () => setCustomView(true)

  return (
    <div className='location'>
      { customView ? <Custom /> : <Default name='location' enableCustomView={ enableCustomView } /> }
    </div>
  )
}

export default Location
