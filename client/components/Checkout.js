import React from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements'
import Stripe from './Stripe'
import {emptyCart} from '../store'
import {connect} from 'react-redux'

const Checkout = props => {
  const products = props.products
  let totalCost = 0
  for (let key in products) {
    if (products[key].id) {
      totalCost += products[key].price * products[key].quantity
    }
  }
  return (
    <React.Fragment>
      <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
        <div className="example">
          <Elements>
            <Stripe
              totalCost={totalCost}
              user={props.user}
              products={products}
              emptyCart={props.emptyCart}
            />
          </Elements>
        </div>
      </StripeProvider>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userState.currUser,
    products: state.cartState.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    emptyCart: () => {
      dispatch(emptyCart())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
