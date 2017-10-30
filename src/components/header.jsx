import React, { Component } from 'react';
import '../style/scss/header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inApp: false
    }
    // This binding is necessary to make `this` work in the callback
    // this.submitAccount = this.submitAccount.bind(this);
  }
  back() {
    window.history.back()
  }
  componentWillMount() {
    var u = navigator.userAgent;
    var isSnjr = u.toLowerCase().match(/snyifubao/i) == 'snyifubao';//苏宁金融
    var isSnyg = u.toLowerCase().match(/ebuy/i) == 'ebuy';//苏宁易购
    if (isSnjr || isSnyg) {
      this.setState({ inApp: true })
    }
  }
  render() {
    return (
      !this.state.inApp &&
      <header>
        <div className="clickZone" onClick={this.back}>
          <div className="arrow-left"></div>
        </div>
        <span className="title">{this.props.title}</span>
      </header>
    )
  }
}
export default Header;