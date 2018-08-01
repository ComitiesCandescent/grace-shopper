import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {fetchReviewById} from '../store/review'
import {Card, Image, Button, Rating} from 'semantic-ui-react'
import Reviews from './Reviews';
const timeAgo = require('node-time-ago');

class ReviewItem extends React.Component {
  // constructor() {
  //   super()
  //    this.componentDidMount = this.componentDidMount.bind(this)
  //   //  this.onClick = this.onClick.bind(this)
  // }

  //  componentDidMount() {
  //  }

  //  onClick(productId) {
  //    this.props.loadProduct(productId)
  //  }

  render() {
    //this.props.loadReview(this.props.id)
    //console.log('this.props.id: ', this.props.id);
    const review = this.props.review
    console.log('review: ', review);
    return(

      <div className="green ui card">
        <div className="content">
          <a className="header">{review.title}</a>
          <div class="meta">
            <span class="right floated time">Written {timeAgo(review.createdAt)} by {review.name}</span>
          </div>
          <div className="description">
            <p>{review.body}</p>
          </div>
          <div className="extra content">
            {/* <div className="ui star rating" data-rating={review.stars === undefined ? review.stars.toString() : ''} data-max-rating="5"/> */}
            <Rating icon='star' defaultRating={review.stars.toString()} maxRating={5} disabled/>
          </div>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     review: state.reviewState.singleReview
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     loadReview: id => {
//       dispatch(fetchReviewById(id))
//     }
//   }
// }

export default ReviewItem
