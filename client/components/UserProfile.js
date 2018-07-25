import React, { Component } from 'react'

export default class GrassList extends Component {

  render() {
    return (

      <div className="card">
        <img src="img.jpg" alt="John" style="width:100%" />
        <h1>John Doe</h1>
        <p className="title">CEO & Founder, Example</p>
        <p>Harvard University</p>
        <a href="#"><i className="fa fa-dribbble" /></a>
        <a href="#"><i className="fa fa-twitter" /></a>
        <a href="#"><i className="fa fa-linkedin" /></a>
        <a href="#"><i className="fa fa-facebook" /></a>
        <p><button>Update</button></p>
      </div>
    )
  }
}

