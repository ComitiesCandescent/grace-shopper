import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class GrassList extends Component {



  render() {
    return (

      <div>
        <img src="img.jpg" />
        <h1>{user.name}</h1>
        <a>E-Mail: {user.email}</a>
        <p>- Address -</p>
        <a>Street: {user.street}</a>
        <a>City: {user.city}</a>
        <a>State: {user.state}</a>
        <a>ZipCode: {user.zipcode}</a>
        <NavLink to={`/user/${user.id}`}>Update</NavLink>
      </div>
    )
  }
}

