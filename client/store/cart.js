import axios from 'axios'

// Action types
const GET_CART_PRODUCTS = `GET_CART_PRODUCTS`
const ADD_PRODUCT = `ADD_PRODUCT`
const REMOVE_PRODUCT = `REMOVE_PRODUCT`
const EMPTY_CART = `EMPTY_CART`

// Initial state
const initialState = {
  products: {}
}

// Action creators
const getCartProducts = products => ({
  type: GET_CART_PRODUCTS, products
})

export const emptyCart = () => ({
  type: EMPTY_CART
})

const removeCartProduct = product => ({
  type: REMOVE_PRODUCT,
  product
})

export const addProduct = ({ userId, product }) => ({
  type: ADD_PRODUCT,
  userId,
  product
})

// Thunk creators
export const fetchCartProducts = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/cart/${userId}`)
    dispatch(getCartProducts(res.data.cartProducts))
  } catch (err) {
    console.error(err)
  }
}

// export const addProduct = product => async dispatch => {
//   try {

//     dispatch(addProductAct(res.data))
//   } catch (err) {
//     console.error(err)
//   }
// }

export const deleteProduct = productId => async dispatch => {
  const res = await axios.delete(``)
}


// Reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case EMPTY_CART:
      return initialState
    case GET_CART_PRODUCTS:
      return { products: action.products }
    case ADD_PRODUCT:
      const newProducts = { ...state.products }
      const newProduct = { ...action.product }
      if (newProducts[newProduct.name]) {
        newProducts[newProduct.name].quantity += 1
      } else {
        newProducts[newProduct.name] = newProduct
        newProducts[newProduct.name].quantity = 1
      }
      (async function () {
        if (action.userId) {
          await axios.put(`/api/cart/${action.userId}`, { products: newProducts })
        }
      })();
      return { products: newProducts }
    default:
      return state
  }
}
