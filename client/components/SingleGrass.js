import React, {Component} from 'react'

export default class SingleGrass extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      pic: '',
      description: '',
      reviews: [],
      quantity: 0 //saving this; just in case we have time to increment or decrement our grass product
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    //this.setState()
  }
  handleSubmit(event) {}
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.title}</h1>
        <img src={this.state.pic} height="300" width="300" />
        <p>{this.state.description}</p>
        <input type="submit" onClick={this.handleSubmit}>
          Add to Cart
        </input>
        <ul>
          {this.state.reviews.map(review => (
            <li key={review.id}>
              {review.name} wrote: {review.description}
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}
