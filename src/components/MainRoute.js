import React from 'react'
import { Route } from 'react-router-dom'

import NavContainer from '@/containers/Common/nav'
import SubNavConatiner from '@/containers/Common/subNav'

export default ({ component: C, props: cProps, ...rest }) => (
  <Route {...rest} render={props => (
    [
      <NavContainer key="navbar" />,
      <SubNavConatiner key="subnavbar" />,
      <C key="body" {...props} {...cProps} />
    ]
  )} />
)
