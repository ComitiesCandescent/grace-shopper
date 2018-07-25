import React, { Component } from 'react'

export default class GrassList extends Component {

  render() {
    return (

      <div>
        <img src="img.jpg" />
        <h1>Name</h1>
        <a>E-Mail: </a>
        <p>Address:</p>
        <a>Street: </a>
        <a>City: </a>
        <a>State: </a>
        <a>ZipCode: </a>
        <p><button>Update</button></p>
      </div>
    )
  }
}

