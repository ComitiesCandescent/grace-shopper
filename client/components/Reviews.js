import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchReviewsByProduct} from '../store/review'
import ReviewItem from './ReviewItem'

class Reviews extends Component {
  componentDidMount() {
    this.props.loadReviews(this.props.productId)
  }

  // onClick(productId) {
  //   this.props.loadProduct(productId)
  // }

  render() {
    const reviews = this.props.reviews
    return (
      <div>
        <h2>Reviews:</h2>
        <div className="ui items">
          {reviews.map(review => {
            return <ReviewItem key={review.id} id= {review.id} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviewState.reviewsByProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadReviews: (id) => {
      dispatch(fetchReviewsByProduct(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
