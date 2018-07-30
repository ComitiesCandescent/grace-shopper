import React from 'react'
import UserForm from './UserForm'
import {Elements, StripeProvider} from 'react-stripe-elements'
import Stripe from './Stripe'

const Checkout = () => {
  return (
    <React.Fragment>
      <UserForm />
      <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <Stripe />
          </Elements>
        </div>
      </StripeProvider>
    </React.Fragment>
  )
}

export default Checkout
