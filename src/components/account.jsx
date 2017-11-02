import React, { Component } from 'react';
import axios from 'axios';
import logo from '../images/logo.svg';
import '../style/scss/account.scss';
import Header from './header'

class Account extends Component {
  constructor() {
    super()
    this.state = {
      account: ""
    }
    // This binding is necessary to make `this` work in the callback
    // this.handleChange = this.handleChange.bind(this);
    this.submitAccount = this.submitAccount.bind(this);
  }
  handleChange(e) {
    this.setState({ account: e.target.value })
  }
  submitAccount() {
    axios({
      method: 'get',
      url: 'data/test.json',
      data: {
        account: this.state.account
      }
    }).then((res) => {
      this.props.history.push('/chooseWay')
      // this.context.router.push(path)
    })
  }

  componentDidMount() {
  }
  render() {
    return (
      <div className="AccountPage">
        <Header title="重置支付密码"></Header>
        <div className="tips">输入重置登录密码的账号</div>
        <dl>
          <dt onClick={this.submitAccount}>账号</dt>
          <dd>
            <input type="text" placeholder="手机号/邮箱账号" onInput={this.handleChange.bind(this)} />
          </dd>
        </dl>
      </div>
    );
  }
}

export default Account;
