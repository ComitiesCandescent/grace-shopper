import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/product'

class SingleProduct extends Component {
  componentDidMount() {
    this.props.loadSingleProduct()
  }

  render() {
    const singleProduct = this.props.singleProduct
    return (
      <React.Fragment>
        <h1>{singleProduct.title}</h1>
        <img src={singleProduct.pic} height="300" width="300" />
        <p>{singleProduct.description}</p>
        {/* <input type="submit" onClick={this.handleSubmit}>
          Add to Cart
        </input> */}
        <ul>
          {singleProduct.reviews.map(review => (
            <li key={review.id}>
              {review.name} wrote: {review.description}
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    singleProduct: state.productState.productState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSingleProduct: () => {
      dispatch(fetchSingleProduct())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
