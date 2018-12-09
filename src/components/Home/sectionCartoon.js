import React from 'react'

export default class SectionCartoonComponent extends React.Component {
  render() {
    const {
      title
    } = this.props
    return (
      <div className="section section-cartoon">
        <button className="more"></button>
        <p className="title">{title}</p>
        <ul className="row-container">
          <li className="cartoon__row">
            <div className="cartoon__thumnail"></div>
            <div className="cartoon__title">만화2</div>
          </li>
          <li className="cartoon__row">
            <div className="cartoon__thumnail"></div>
            <div className="cartoon__title">만화2</div>
          </li>
          <li className="cartoon__row">
            <div className="cartoon__thumnail"></div>
            <div className="cartoon__title">만화2</div>
          </li>
          <li className="cartoon__row">
            <div className="cartoon__thumnail"></div>
            <div className="cartoon__title">만화2</div>
          </li>
          <li className="cartoon__row">
            <div className="cartoon__thumnail"></div>
            <div className="cartoon__title">만화2</div>
          </li>
          <li className="cartoon__row">
            <div className="cartoon__thumnail"></div>
            <div className="cartoon__title">만화2</div>
          </li>
          <li className="cartoon__row">
            <div className="cartoon__thumnail"></div>
            <div className="cartoon__title">만화2</div>
          </li>
        </ul>
      </div>
    )
  }
}