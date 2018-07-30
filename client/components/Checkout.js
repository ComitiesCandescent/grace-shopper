import React, { Component } from 'react'
import UserForm from './UserForm'
import { Elements, StripeProvider } from 'react-stripe-elements'
import Stripe from './Stripe'
import { Icon } from 'semantic-ui-react';


class Checkout extends Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(user) {
    console.log(user)
    this.setState({ user })

  }

  render() {
    return (
      <React.Fragment>
        <UserForm handleSubmit={this.handleSubmit} />
        <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
          <div className="example">
            <h1>React Stripe Elements Example</h1>
            <Elements>
              <Stripe />
            </Elements>
          </div>
        </StripeProvider>
      </React.Fragment >
    )
  }
}

export default Checkout


