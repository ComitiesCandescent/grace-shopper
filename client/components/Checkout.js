import React, {Component} from 'react'
import UserForm from './UserForm'

export default class Checkout extends Component {
  render() {
    return (
      <React.Fragment>
        <UserForm />
        {/* Credit Card stuff that is postponned */}
        <input type="submit" />
      </React.Fragment>
    )
  }
}
