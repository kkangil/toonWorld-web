import React from 'react'
import { Route } from 'react-router-dom'

import NavContainer from '@/containers/Common/nav'

export default ({ component: C, props: cProps, ...rest }) => (
  <Route {...rest} render={props => (
    [
      <NavContainer key="navbar" />,
      <C key="body" {...props} {...cProps} />
    ]
  )} />
)
