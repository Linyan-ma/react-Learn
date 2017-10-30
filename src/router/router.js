<<<<<<< HEAD

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from '@/components/app'
import Account from '@/components/account'
import ChooseWay from '@/components/ways'
const RouterConf = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/chooseWay" component={ChooseWay}>
      </Route>
      <Route path="/account" component={Account} />
    </div>
  </Router>
)
export default RouterConf

=======

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from '@/components/app'
import Account from '@/components/account'
import ChooseWay from '@/components/ways'
const RouterConf = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/chooseWay" component={ChooseWay}>
      </Route>
      <Route path="/account" component={Account} />
    </div>
  </Router>
)
export default RouterConf

>>>>>>> 2fdc2b0eaeaf32c160a41960fbbca76aac02f799
