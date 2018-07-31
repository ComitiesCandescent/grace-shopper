import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {
  Login,
  Signup,
  Home,
  SingleProduct,
  Cart,
  UserProfile,
  EditUser
} from './components'
import Checkout from './components/Checkout'

// Component
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/:productId" component={SingleProduct} />
      <Route exact path="/users/:userId/edit" component={EditUser} />
      <Route exact path="/users/:userId" component={UserProfile} />
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default Routes
