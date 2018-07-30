import axios from 'axios'

// Action types
const GET_CART_PRODUCTS = `GET_CART_PRODUCTS`
const ADD_PRODUCT = `ADD_PRODUCT`
const REMOVE_PRODUCT = `REMOVE_PRODUCT`

// Initial state
const initialState = {
  products: {}
}

// Action creators
const getCartProducts = products => ({
  type: GET_CART_PRODUCTS,
  products
})

const removeCartProduct = product => ({
  type: REMOVE_PRODUCT,
  product
})

export const addProduct = product => ({
  type: ADD_PRODUCT,
  product
})

// Thunk creators
export const fetchCartProducts = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/${userId}/cart`)
    dispatch(getCartProducts(res.data))
  } catch (err) {
    console.error(err)
  }
}

// export const fetchProductToAdd = productId => async dispatch => {
//   try {
//     const res = await axios.get(`/api/products/${productId}`)
//     dispatch(addProduct(res.data))
//   } catch (err) {
//     console.error(err)
//   }
// }

export const deleteProduct = productId => async dispatch => {
  const res = await axios.delete(``)
}

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProducts = {...state.products}
      const newProduct = {...action.product}
      if (newProducts[newProduct.name]) {
        newProducts[newProduct.name].quantity += 1
      } else {
        newProducts[newProduct.name] = newProduct
        newProducts[newProduct.name].quantity = 1
      }
      return {products: newProducts}
    default:
      return state
  }
}
