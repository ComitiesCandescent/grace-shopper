import React, { Component } from 'react'
import Grass from './Grass'

export default class GrassList extends Component {
  constructor() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h2>Grasses For Sale</h2>
        {products.map(product => {
          <Grass />
        })}
      </div>
    )
  }
}
