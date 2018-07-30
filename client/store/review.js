import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS'
const GET_REVIEWS_BY_PRODUCT = 'GET_REVIEWS_BY_PRODUCT'
const GET_REVIEW_BY_ID = 'GET_REVIEW_BY_ID'

/**
 * INITIAL STATE
 */
const initialState = {
  allReviews: [],
  reviewsByProduct: [],
  singleReview: {}
}

/**
 * ACTION CREATORS
 */
const getAllReviews = reviews => ({
  type: GET_ALL_REVIEWS,
  reviews
})

const getReviewsByProduct = reviews => ({
  type: GET_REVIEWS_BY_PRODUCT,
  reviews
})

const getReviewById = review => ({
  type: GET_REVIEW_BY_ID,
  review
})

/**
 * THUNK CREATORS
 */
export const fetchAllReviews = () => async dispatch => {
  try {
    const res = await axios.get('/api/reviews')
    dispatch(getAllReviews(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchReviewsByProduct = productId => async dispatch => {
  try {
    const res = await axios.get(`/api/reviews/product/${productId}`)
    dispatch(getReviewsByProduct(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchReviewById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/reviews/${id}`)
    dispatch(getReviewById(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return {...state, reviews: action.reviews}
    case GET_REVIEWS_BY_PRODUCT:
      return {...state, reviewsByProduct: action.reviews}
    case GET_REVIEW_BY_ID:
      return {...state, singleReview: action.review}
    default:
      return state
  }
}
