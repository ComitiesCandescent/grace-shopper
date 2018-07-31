import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import Axios from '../../node_modules/axios'
import UserForm from './UserForm'

class Stripe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: false,
      currUser: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault()
    let {token} = await this.props.stripe.createToken({name: 'Name'})
    let response = await fetch('/cart/charge', {
      method: 'POST',
      headers: {'Content-Type': 'text/plain'},
      body: token.id
    })

    if (response.ok) this.setState({complete: true})
  }

  render() {
    if (this.state.complete) return <h1>Purchase Completed!</h1>
    return (
      <React.Fragment>
        <h3>Shipping Address</h3>
        <UserForm />
        <h3>Billing Address</h3>
        <UserForm />
        <div className="checkout">
          <p>Would you like to complete the purchase?</p>
          <CardElement />
          <button type="button" onClick={this.submit}>
            Send
          </button>
        </div>
      </React.Fragment>
    )
  }
}
export default injectStripe(Stripe)
