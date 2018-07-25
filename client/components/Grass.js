import React, {Component} from 'react'
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom'

export default class Grass extends Component {
  constructor() {}

  componentDidMount() {}

  render() {
    return (
      <div className="singleProduct">
        <div>
          {/* this link will go to the single grass view */}
          <Link>
            <h3>Product Name</h3>
          </Link>
          <img src="" />
          <h4>DESCRIPTION ivfjbsdojabfekl </h4>
          <h4>PRICE</h4>
        </div>
        <div>
          <select>{/* quantity options */}</select>
          <button>Add To Cart</button>
        </div>
      </div>
    )
  }
}
