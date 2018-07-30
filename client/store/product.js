import axios from 'axios'

// Action types
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

// Initial state
const initialState = {
  products: [],
  singleProduct: {}
}

// Action creators
const getAllProducts = products => ({
  type: GET_ALL_PRODUCTS,
  products
})

const getSingleProduct = singleProduct => ({
  type: GET_SINGLE_PRODUCT,
  singleProduct
})

// Thunk creators
export const fetchAllProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products')
    dispatch(getAllProducts(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchSingleProduct = productId => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${productId}`)
    dispatch(getSingleProduct(res.data))
  } catch (err) {
    console.error(err)
  }
}

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, products: action.products}
    case GET_SINGLE_PRODUCT:
      return {...state, singleProduct: action.singleProduct}
    default:
      return state
  }
}
