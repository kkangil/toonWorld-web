import React from 'react'
import { Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

/* Import the components */
import AppliedRoute from './components/AppliedRoute'
import MainRoute from './components/MainRoute'
import LoadingComponent from './components/LoadingComponent'

const AsyncHome = Loadable({
  loader: () => import('./containers/Home'),
  loading: LoadingComponent
})

const AsyncCartoons = Loadable({
  loader: () => import('./containers/Cartoons'),
  loading: LoadingComponent
})

/* Use components to define routes */
export default ({ childProps }) =>
  <Switch>
    <MainRoute exact path='/' component={AsyncHome} props={childProps} />
    <MainRoute exact path='/cartoons' component={AsyncCartoons} props={childProps} />
    {/* Finally, catch all unmatched routes */}
    {/* <Route component={AsyncNotFound} /> */}
  </Switch>
