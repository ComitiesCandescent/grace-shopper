import React from 'react'
import UserForm from './UserForm'

const Checkout = () => {
  return (
    <React.Fragment>
      <UserForm />
      {/* Credit Card stuff that is postponned */}
      <input type="submit" />
    </React.Fragment>
  )
}

export default Checkout
