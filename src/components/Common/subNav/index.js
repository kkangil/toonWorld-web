import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Nav } from 'react-bootstrap'

export default class SubNavComponent extends React.Component {
  render() {
    return (
      <Grid id="sub-nav">
        <Nav bsStyle="pills" activeKey={1}>
          <Link className="nav-title" to="/cartoons">
            연재 만화
          </Link>
          <Link className="nav-title" to="/cartoons">
            완결 만화
          </Link>
          <Link className="nav-title" to="/cartoons">
            소설
          </Link>
          <Link className="nav-title" to="/cartoons">
            웹 만화
          </Link>
          <Link className="nav-title last" to="/#">
            게시판
          </Link>
        </Nav>
      </Grid>
    )
  }
}