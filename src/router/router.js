
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from '@/components/app'
import Account from '@/components/account'
import ChooseWay from '@/components/ways'
const matchIns = (match) => {
  return <h3>{match.params}</h3>
}
const RouterConf = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/chooseWay" component={ChooseWay}>
      </Route>
      <Route path="/matchIns" component={matchIns} />
      <Route path="/account" component={Account} />
    </div>
  </Router>
)
export default RouterConf

