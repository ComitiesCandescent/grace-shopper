import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {
  Login,
  Signup,
  Home,
  SingleProduct,
  Cart,
  UserProfile
} from './components'
import Checkout from './components/Checkout'
// import {connect} from 'react-redux'
// import {me} from './store'
// import PropTypes from 'prop-types'

/**
 * COMPONENT
 */

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/:productId" component={SingleProduct} />
      <Route exact path="/users/:userId" component={UserProfile} />
      {/* <Route exact path="/:userId/cart" component={Cart} /> */}
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default Routes

// class Routes extends Component {
//   componentDidMount() {
//     this.props.loadInitialData()
//   }

//   render() {
//     const {isLoggedIn} = this.props

//     return (
//       <Switch>
//         {/* Routes placed here are available to all visitors */}
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={Signup} />
//         {isLoggedIn && (
//           <Switch>
//             {/* Routes placed here are only available after logging in */}
//             <Route path="/home" component={UserHome} />
//           </Switch>
//         )}
//         {/* Displays our Login component as a fallback */}
//         {/* <GrassList /> */}
//         <Route exact path="/" component={Home} />
//       </Switch>
//     )
//   }
// }

// export default Routes

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// // The `withRouter` wrapper makes sure that updates are not blocked
// // when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes))

// /**
//  * PROP TYPES
//  */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
