import React, { Component } from 'react';
import Header from './header'
import '@/style/scss/chooseWays'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class ChooseWays extends Component {
  render() {
    return (
      <div className="waysPage">
        <Header title="选择验证方式"></Header>
        <p className="info">选择一个方式验证您的身份</p>
        <ul className="ways">
          <li className="item">
            <Link to="/">
              <span>返回首页</span>
              <div className="arrow-right"></div>
            </Link>
          </li>
          <li className="item">
            <a href="idcard.html">
              <span>验证身份证号+短信</span>
              <div className="arrow-right"></div>
            </a>
          </li>
          <li className="item">
            <a href="bankCard4.html">
              <span>验证银行卡信息</span>
              <div className="arrow-right"></div>
            </a>
          </li>
          <li className="item">
            <a href="getSms.1018.html">
              <span>验证新银行卡</span>
              <div className="arrow-right"></div>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
export default ChooseWays