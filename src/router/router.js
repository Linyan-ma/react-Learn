
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from '@/components/app'
import Account from '@/components/account'
import ChooseWay from '@/components/ways'
import Products from '@/components/products'
const matchIns = (match) => {
  return <h3>{match.params}</h3>
}
const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];
const RouterConf = (
  <Router>
    <div>
      <Route exact path="/" component={App}>
      </Route>
      <Route path="/chooseWay" component={ChooseWay}>
      </Route>
      <Route path="/Products" component={Products} products={PRODUCTS}/>
      <Route path="/matchIns" component={matchIns} />
      <Route path="/account" component={Account} />

    </div>
  </Router>
)
export default RouterConf

