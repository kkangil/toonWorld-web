import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, Navbar, FormControl, Button } from 'react-bootstrap'

import './style.scss'

export default class NavComponent extends Component {
  render() {
    const {
      textForSearch,
      handleChange,
      handleKeyPress,
      search
    } = this.props
    return (
      <Navbar inverse collapseOnSelect id="nav">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">툰월드</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <div className="search-container">
              <FormControl
                type="text"
                name="textForSearch"
                placeholder="만화 제목을 입력해주세요."
                value={textForSearch}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />
              <Button onClick={search}>검색</Button>
            </div>
          </Nav>
          <Nav pullRight>
            <NavItem href="#">
              회원가입
            </NavItem>
            <NavItem href="#">
              로그인
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
