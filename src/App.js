import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import Routes from './Routes'
import Store from './stores'

import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.scss'

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Routes />
      </Provider>
    )
  }
}
