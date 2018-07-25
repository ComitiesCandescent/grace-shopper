import React, {Component} from 'react'
import {connect} from 'react-redux'

function SingleGrass(props) {
  return (
    <React.Fragment>
      <h1>{props.product.title}</h1>
      <img src={props.pic} height="300" width="300" />
      <p>{props.description}</p>
      <input type="submit" onClick={this.handleSubmit}>
        Add to Cart
      </input>
      <ul>
        {props.reviews.map(review => (
          <li key={review.id}>
            {review.name} wrote: {review.description}
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return {
    product: state.product
  }
}
// function mapDispatchToProps(){

// }
export default connect(mapStateToProps)(SingleGrass)
