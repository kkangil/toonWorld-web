import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'

import SectionCartoonComponent from './sectionCartoon'
import SectionBoardComponent from './sectionBoard'

import './style.scss'

export default class HomeComponent extends Component {
  render() {
    return (
      <Grid id="main">
        <SectionCartoonComponent title="툰월드 인기 순위" />
        <SectionCartoonComponent title="최신 만화 업데이트 알림" />
        <SectionCartoonComponent title="완결 명작 만화" />
        <SectionCartoonComponent title="소설" />
        <SectionBoardComponent title="자유 게시판" />
        <SectionBoardComponent title="유머 게시판" />
      </Grid>
    )
  }
}
