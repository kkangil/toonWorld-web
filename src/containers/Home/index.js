import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import HomeComponent from '@/components/Home'

@inject('store')
@observer
export default class HomeContainer extends Component {
  render() {
    return (
      <HomeComponent />
    )
  }
}
