import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchReviewsByProduct} from '../store/review'
import ReviewItem from './ReviewItem'

class Reviews extends Component {
    //  this.onClick = this.onClick.bind(this)


  // onClick(productId) {
  //   this.props.loadProduct(productId)
  // }

  render() {
    const reviews = this.props.reviews
    console.log('this.props.productId: ', this.props.productId);
    console.log('reviews: ', reviews);
    return (
      <div>
        <h2>Reviews:</h2>
        <div className="ui items">
          {reviews.length !== 0 ?
            reviews.map(review => {
            return <ReviewItem key={review.id} id={review.id} review ={review} />
            }):
            <h2>No Reviews Yet</h2>}
        </div>
        <div className="ui form">
        <div className="field">
          <label>Write a review</label>
          <textarea rows="2"></textarea>
        </div>
          <button className="ui button" type="submit">Submit</button>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     reviews: state.reviewState.reviewsByProduct
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     loadReviews: (id) => {
//       console.log('id', id)
//       dispatch(fetchReviewsByProduct(id))
//     }
//   }
// }

export default Reviews
