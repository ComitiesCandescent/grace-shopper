import React from 'react'
import {Rating} from 'semantic-ui-react'
const timeAgo = require('node-time-ago')

const ReviewItem = props => {
  const review = props.review
  return (
    <div className="green ui card">
      <div className="content">
        <a className="header">{review.title}</a>
        <div className="meta">
          <span className="right floated time">
            Written {timeAgo(review.createdAt)} by {review.name}
          </span>
        </div>
        <div className="description">
          <p>{review.body}</p>
        </div>
        <div className="extra content">
          <Rating
            icon="star"
            defaultRating={review.stars.toString()}
            maxRating={5}
            disabled
          />
        </div>
      </div>
    </div>
  )
}

export default ReviewItem
