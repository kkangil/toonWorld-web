import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export default class FooterComponent extends Component {
  render() {
    return (
      <div id="footer" className="footer">
        <div className="footer__info">
          <div className="footer__info--link-wrap">
            <Link to="#" className="footer__info--link">
              고객센터
            </Link>
            <Link to="#" className="footer__info--link">
              사업자정보확인
            </Link>
            <Link to="#" className="footer__info--link">
              개인정보처리방침
            </Link>
            <Link to="#" className="footer__info--link">
              페이스북
            </Link>
            <Link to="#" className="footer__info--link">
              인스타그램
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
