import React from 'react'

const UserForm = props => {
  return (
    <React.Fragment>
      <form>
        <label htmlFor="name">Name </label>
        <input
          name="name"
          type="text"
          value={props.state.name}
          onChange={props.onChange}
          required
        />
        <label htmlFor="address">Street </label>
        <input
          name="address"
          type="text"
          value={props.state.address}
          onChange={props.onChange}
          required
        />
        <label htmlFor="city">City </label>
        <input
          name="city"
          type="text"
          value={props.state.city}
          onChange={props.onChange}
          required
        />
        <label htmlFor="state">State </label>
        <input
          name="state"
          type="text"
          value={props.state.state}
          onChange={props.onChange}
          required
        />
        <label htmlFor="zipcode" type="text">
          Zip Code
        </label>
        <input
          name="zipcode"
          type="number"
          value={props.state.zipcode}
          onChange={props.onChange}
          required
        />
      </form>
    </React.Fragment>
  )
}

export default UserForm
