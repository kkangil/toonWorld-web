import React from 'react'
import { observer, inject } from 'mobx-react'

import CartoonsComponent from '@/components/Cartoons'

@inject('store')
@observer
export default class CartoonsContainer extends React.Component {
  render() {
    return (
      <CartoonsComponent />
    )
  }
}