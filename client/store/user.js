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
const EDIT_USER = `EDIT_USER`

// Action creators
const gotNewUser = user => ({type: NEW_USER, user})
const gotUser = user => ({type: GET_USER, user})
const gotRemoveUser = () => ({type: REMOVE_USER})
const gotEditUser = user => ({type: EDIT_USER, user})

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

export const deleteUser = userId => {
  return async dispatch => {
    try {
      const res = await axios.delete(`/api/users/${userId}`)
      return dispatch(gotRemoveUser(res.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const editUser = (userData, userId) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/users/${userId}`, userData)
      return dispatch(gotEditUser(data))
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
    case EDIT_USER:
      return {
        ...state,
        currUser: action.user
      }
    default:
      return state
  }
}
