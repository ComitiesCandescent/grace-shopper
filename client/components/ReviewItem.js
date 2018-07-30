import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {fetchReviewById} from '../store/review'
import {Card, Image, Button} from 'semantic-ui-react'
import Reviews from './Reviews';

class ReviewItem extends React.Component {
  constructor() {
    super()
     this.componentDidMount = this.componentDidMount.bind(this)
     this.onClick = this.onClick.bind(this)
  }

   componentDidMount() {
     this.props.loadReview(this.props.id)
   }

  //  onClick(productId) {
  //    this.props.loadProduct(productId)
  //  }

  render() {
    const review = this.props.review
    return(
      <div className="item">
        <div className="content">
          <a className="header">Dummy Header</a>
          <div className="description">
            <p>{review.body}</p>
          </div>
          <div className="extra">
            <div className="ui rating" data-rating={review.stars.toString()} data-max-rating="5"/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    review: state.reviewState.singleReview
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // loadCartProducts: userId => {
    //   dispatch(fetchCartProducts(userId))
    // },
    loadReview: id => {
      dispatch(fetchReviewById(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem)
