import React from 'react'
import { Grid, Nav, NavItem } from 'react-bootstrap'

export default class SubNavComponent extends React.Component {
  render() {
    return (
      <Grid>
        <Nav bsStyle="pills" activeKey={1}>
          <NavItem href="#">
            연재 만화
          </NavItem>
          <NavItem href="/#">
            완결 만화
          </NavItem>
          <NavItem href="/#">
            소설
          </NavItem>
          <NavItem href="/#">
            웹 만화
          </NavItem>
          <NavItem href="/#">
            게시판
          </NavItem>
        </Nav>
      </Grid>
    )
  }
}