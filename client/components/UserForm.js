import React from 'react'

const UserForm = () => {
  return (
    <React.Fragment>
      <form>
        <label htmlFor="name">Name </label>
        <input
          name="name"
          type="text"
          //value
          required
        />
        <label htmlFor="address">Street </label>
        <input
          name="address"
          type="text"
          // value
          required
        />
        <label htmlFor="city">City </label>
        <input name="city" type="text" required />
        <label htmlFor="state">State </label>
        <input name="state" type="text" required />
        <label htmlFor="zipcode" type="text">
          Zip Code
        </label>
        <input name="zipcode" type="number" required />
      </form>
    </React.Fragment>
  )
}

export default UserForm
