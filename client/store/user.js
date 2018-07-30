import axios from 'axios'
import history from '../history'

// Initial state
const initialState = {
  newUser: {
    name: ``,
    street: ``,
    city: ``,
    state: ``,
    zipcode: 11111,
    email: ``,
    password: ``
  },
  currUser: {},
  guest: false
}

// Action types
const NEW_USER = `NEW_USER`
const GET_USER = `GET_USER`
const REMOVE_USER = `REMOVE_USER`

// Action creators
const gotNewUser = user => ({type: NEW_USER, user})
const gotUser = user => ({type: GET_USER, user})
const gotRemoveUser = () => ({type: REMOVE_USER})

// Thunk creators
export const fetchUser = userId => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/users/${userId}`)
      return dispatch(gotUser(res.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const fetchUserByEmail = email => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/users/email/${email}`)
      return dispatch(gotUser(res.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const postUser = user => {
  return async dispatch => {
    try {
      const res = await axios.post(`/api/users`, user)
      return dispatch(gotNewUser(res.data))
    } catch (err) {
      console.error(err)
    }
  }
}

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_USER:
      return {
        ...state,
        newUser: action.user
      }
    case GET_USER:
      return {
        ...state,
        currUser: action.user
      }
    case REMOVE_USER:
      return initialState
    default:
      return state
  }
}
