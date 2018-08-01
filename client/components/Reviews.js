import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addNewReview} from '../store/review'
import ReviewItem from './ReviewItem'
import {Rating} from 'semantic-ui-react'

class Reviews extends Component {
  constructor() {
    super()
    this.state = {
      description: '',
      title: '',
      reviews: [],
      stars: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRate = this.handleRate.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.reviews !== prevProps.reviews) {
      console.log('in if statement')
      this.setState({
        reviews: this.props.reviews
      })
    }
  }

  componentDidMount() {
    this.setState({
      reviews: this.props.reviews
    })
  }

  handleRate(e, {rating, maxRating}) {
    this.setState({
      stars: {
        rating: rating,
        maxRating: maxRating
      }
    })
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const reviews = this.state.reviews
    console.log('this.props.productId: ', this.props.productId)
    console.log('reviews: ', reviews)
    console.log('user', this.props.user)
    return (
      <div>
        <h2>Reviews:</h2>
        <div className="ui items">
          {reviews.length !== 0 ? (
            reviews.map(review => {
              return (
                <ReviewItem key={review.id} id={review.id} review={review} />
              )
            })
          ) : (
            <h2>No Reviews Yet</h2>
          )}
        </div>
        {this.props.user.id !== undefined ? (
          <form
            className="ui form"
            onSubmit={event => {
              this.props.handleSubmit(event, this.state, this.props)
              this.setState({
                description: '',
                title: ''
              })
            }}
          >
            <div className="field">
              <label>Title</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="title"
                value={this.state.title}
              />
            </div>
            <div className="field">
              <label>Write a review and rate it</label>
              <textarea
                onChange={this.handleChange}
                required
                type="text"
                name="description"
                value={this.state.description}
                rows="2"
              />
              <Rating maxRating={5} onRate={this.handleRate} />
            </div>
            <button className="ui button" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <div className="ui warning message">
            <div className="header">
              You must login or signup before you can write a review!
            </div>
            Visit our login/signup pages, then try again
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.userState.currUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (event, data, props) => {
      event.preventDefault()
      dispatch(
        addNewReview({
          body: data.description,
          title: data.title,
          name: props.user.name,
          stars: data.stars.rating,
          userId: props.user.id,
          productId: props.productId
        })
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
