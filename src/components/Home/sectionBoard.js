import React from 'react'

export default class SectionBoardComponent extends React.Component {
  render() {
    const {
      title
    } = this.props
    return (
      <div className="section section-board">
        <p className="board__title">{title}</p>
        <ul className="board__container">
          <li className="board__row">
            <p>안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요</p>
            <span>(33)</span>
          </li>
          <li className="board__row">
            <p>안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요</p>
            <span>(33)</span>
          </li>
          <li className="board__row">
            <p>안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요</p>
            <span>(33)</span>
          </li>
          <li className="board__row">
            <p>안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요</p>
            <span>(33)</span>
          </li>
          <li className="board__row">
            <p>안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요</p>
            <span>(33)</span>
          </li>
        </ul>
      </div>
    )
  }
}