import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CART_PRODUCTS = 'GET_CART_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

/**
 * INITIAL STATE
 */
const initialState = {
  products: []
}

/**
 * ACTION CREATORS
 */
const getCartProducts = products => ({
  type: GET_CART_PRODUCTS,
  products
})

const removeCartProduct = product => ({
  type: REMOVE_PRODUCT,
  product
})


const addProduct = product => ({
  type: ADD_PRODUCT,
  product
})

/**
 * THUNK CREATORS
 */
export const fetchCartProducts = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/${userId}/cart`)
    dispatch(getCartProducts(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchProductToAdd = productId => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${productId}`)
    dispatch(addProduct(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const deleteProduct = productId => async dispatch => {
  const res = await axios.delete(``)
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART_PRODUCTS:
      return {...state, products: action.products}
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.product)
      }
    default:
      return state
  }
}
