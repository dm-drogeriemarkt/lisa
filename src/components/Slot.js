import React, { Fragment } from 'react'
import { pluginsExtensions } from 'plugins'
import pipe from 'helpers/pipe'

const Slot = ({ name, elements, ...sharedProps }) => {
  const extensions = pluginsExtensions.filter(({ slot }) => slot === name).map(({ extension }) => extension)
  const withExtensions = extensions.length ? pipe(...extensions)(elements) : elements

  return (
    <Fragment>
      { withExtensions.map(({
        components: [InitialComponent, ...components], ...props
      }, i) => <InitialComponent key={i} components={components} {...sharedProps} {...props} />) }
    </Fragment>
  )
}

export default Slot
