import React from 'react'
import UserForm from './UserForm'
import {Elements, StripeProvider} from 'react-stripe-elements'
import Stripe from './Stripe'
import {connect} from 'react-redux'

const Checkout = props => {
  console.log(props)
  // const totalPrice = props.products.reduce(funtion(accumulator, currentValue))
  return (
    <React.Fragment>
      <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
        <div className="example">
          <h1>Place your billing info below</h1>
          <Elements>
            <Stripe />
          </Elements>
        </div>
      </StripeProvider>
    </React.Fragment>
  )
}
const mapStateToProps = state => {
  return {
    products: state.cartState.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCartProducts: () => {
      dispatch(fetchCartProducts(ownProps.match.params.userId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
