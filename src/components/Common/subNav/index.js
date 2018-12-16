import React from 'react'
import { Grid, Nav, NavItem } from 'react-bootstrap'

export default class SubNavComponent extends React.Component {
  render() {
    return (
      <Grid>
        <Nav bsStyle="pills" activeKey={1}>
          <NavItem href="/cartoons">
            연재 만화
          </NavItem>
          <NavItem href="/cartoons">
            완결 만화
          </NavItem>
          <NavItem href="/cartoons">
            소설
          </NavItem>
          <NavItem href="/cartoons">
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