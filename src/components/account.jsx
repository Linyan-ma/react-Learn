<<<<<<< HEAD
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
      console.log(this.props.history)
      this.props.history.push('/chooseWay')
      // this.context.router.push(path)

    })
  }
  initSiller() {
    var _this = this
    siller.init({
      backImg: '',//自定义图片路径（使用系统默认样式则不加此属性）
      tip0: '滑动登录',//初始状态文字（使用系统默认样式则不加此属性）
      tip1: '',//验证完成文字（使用系统默认样式则不加此属性）
      tip2: '网络出现异常，请稍后再试',//验证错误文字（使用系统默认样式则不加此属性）
      tip3: '',//验证中文字（使用系统默认样式则不加此属性）
      backWidth: '300px',//控件长度（使用系统默认样式则不加此属性）
      backHeight: '',//控件高度（使用系统默认样式则不加此属性）
      slWidth: '',//滑块宽度（使用系统默认样式则不加此属性）
      slHeight: '',//滑块高度（使用系统默认样式则不加此属性）
      fontSize: '',
      target: "J_StaticForm",//滑动验证码所在页面div的id（业务系统预先在页面写入一个空的div，必填！）
      callback: setSillerToken,//非必填
      url: appConfig.dtUrl + "/detect/dt/dragDetect.json"//滑动验证后台地址，必填！
    });
    siller.show();
    function setSillerToken() {
      var status = siller.status;
      if (1 == status) {
        var token = siller.queryToken();
        _this.submitAccount(token)
      }
    }
  }
  componentDidMount() {
    this.initSiller()
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
        <div id="sillerDiv">
          <div id="J_StaticForm">
            <input name="sillerToken" id="slideInput" v-model="slideInput" type="hidden" />
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
=======
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
      console.log(this.props.history)
      this.props.history.push('/chooseWay')
      // this.context.router.push(path)

    })
  }
  initSiller() {
    var _this = this
    siller.init({
      backImg: '',//自定义图片路径（使用系统默认样式则不加此属性）
      tip0: '滑动登录',//初始状态文字（使用系统默认样式则不加此属性）
      tip1: '',//验证完成文字（使用系统默认样式则不加此属性）
      tip2: '网络出现异常，请稍后再试',//验证错误文字（使用系统默认样式则不加此属性）
      tip3: '',//验证中文字（使用系统默认样式则不加此属性）
      backWidth: '300px',//控件长度（使用系统默认样式则不加此属性）
      backHeight: '',//控件高度（使用系统默认样式则不加此属性）
      slWidth: '',//滑块宽度（使用系统默认样式则不加此属性）
      slHeight: '',//滑块高度（使用系统默认样式则不加此属性）
      fontSize: '',
      target: "J_StaticForm",//滑动验证码所在页面div的id（业务系统预先在页面写入一个空的div，必填！）
      callback: setSillerToken,//非必填
      url: appConfig.dtUrl + "/detect/dt/dragDetect.json"//滑动验证后台地址，必填！
    });
    siller.show();
    function setSillerToken() {
      var status = siller.status;
      if (1 == status) {
        var token = siller.queryToken();
        _this.submitAccount(token)
      }
    }
  }
  componentDidMount() {
    this.initSiller()
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
        <div id="sillerDiv">
          <div id="J_StaticForm">
            <input name="sillerToken" id="slideInput" v-model="slideInput" type="hidden" />
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
>>>>>>> 2fdc2b0eaeaf32c160a41960fbbca76aac02f799
