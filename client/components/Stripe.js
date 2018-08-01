import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import Axios from '../../node_modules/axios'
import UserForm from './UserForm'

class Stripe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: false,
      billingInfo: {
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: 0
      },
      shippingInfo: {
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: 0
      },
      promo: '',
      total: 0
    }
    this.handleChangeShip = this.handleChangeShip.bind(this)
    this.handleChangeBill = this.handleChangeBill.bind(this)
    this.handleChangePromo = this.handleChangePromo.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePromoSubmit = this.handlePromoSubmit.bind(this)
  }
  componentDidMount() {
    if (this.props.user.id) {
      const user = this.props.user
      this.setState({
        billingInfo: {
          ...this.state.billingInfo,
          name: user.name,
          address: user.street,
          city: user.city,
          state: user.state,
          zipcode: user.zipcode
        }
      })
    }
    this.setState({
      total: this.props.totalCost
    })
  }
  handleChangeShip(event) {
    this.setState({
      shippingInfo: {
        ...this.state.shippingInfo,
        [event.target.name]: event.target.value
      }
    })
  }
  handleChangeBill(event) {
    this.setState({
      billingInfo: {
        ...this.state.billingInfo,
        [event.target.name]: event.target.value
      }
    })
  }
  handleChangePromo(event) {
    this.setState({
      promo: event.target.value
    })
  }
  async handleSubmit(event) {
    event.preventDefault()
    let {token} = await this.props.stripe.createToken({
      name: this.props.user.name
    })
    let response = await fetch('/cart/charge', {
      method: 'POST',
      headers: {'Content-Type': 'text/plain'},
      body: {id: token.id, price: this.props.totalCost}
    })
    const order = {
      orderProducts: this.props.products,
      shippingAdd: this.state.shippingInfo,
      billingAdd: this.state.billingInfo,
      strype: {id: token.id},
      totalPrice: this.state.total,
      userId: this.props.user.id
    }
    const newOrder = await Axios.post('/api/cart/order', order)
    this.props.emptyCart()
    if (response.ok) this.setState({complete: true})
  }
  async handlePromoSubmit(event) {
    event.preventDefault()
    const promo = this.state.promo
    const promoResult = await Axios.put('/api/promo', {
      promo: promo,
      total: this.state.total
    })
    if (typeof promoResult.data === 'string') {
      window.alert(promoResult.data)
    } else {
      this.setState({
        total: this.state.total - promoResult.data
      })
      window.alert(`You got ${promoResult.data} off your purchase`)
    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Completed!</h1>
    return (
      <React.Fragment>
        <h3>Shipping Address</h3>
        <UserForm
          onChange={this.handleChangeShip}
          state={this.state.shippingInfo}
        />
        <h3>Billing Address</h3>
        <UserForm
          onChange={this.handleChangeBill}
          state={this.state.billingInfo}
        />
        <form onSubmit={this.handlePromoSubmit}>
          <input type="text" onChange={this.handleChangePromo} />
          <input type="submit" />
        </form>
        <h6>Total: {this.state.total} </h6>
        <div className="checkout">
          <p>Would you like to complete the purchase?</p>
          <CardElement />
          <button type="button" onClick={this.handleSubmit}>
            Send
          </button>
        </div>
      </React.Fragment>
    )
  }
}
export default injectStripe(Stripe)
