import React from 'react'
import { Grid, Button, Pagination } from 'react-bootstrap'

import CartoonsRowComponent from './row'
import './style.scss'

export default class CartoonsComponent extends React.Component {
  render() {
    const cartoonsRow = []
    for (let i = 0; i < 28; i++) {
      cartoonsRow.push(
        <CartoonsRowComponent />
      )
    }
    return (
      <Grid id="cartoons">
        <div className="section-search">
          <div className="order">
            <span className="active">인기 순</span>
            <span>업데이트 순</span>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="만화 제목을 검색해주세요."
            />
            <Button className="btn btn-search">검색</Button>
          </div>
        </div>
        <div className="section-cartoons">
          <ul className="row-container">
            {cartoonsRow}
          </ul>
        </div>
        <div className="section-pagination">
          <Pagination 
            prev
            next
            first
            last
            maxButtons={5}
            items={10}
            activePage={1}
            ellipsis={false}
            onSelect={newPage => console.log(newPage)}
          />
        </div>
      </Grid>
    )
  }
}