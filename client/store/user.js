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
const WRITE_NEW_USER = 'WRITE_NEW_USER'

// Action creators
const gotNewUser = user => ({type: NEW_USER, user})
const gotUser = user => ({type: GET_USER, user})
const gotRemoveUser = () => ({type: REMOVE_USER})
export const writeNewUser = info => ({type: WRITE_NEW_USER, info})

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
      const res = await axios.get(`/api/users/${email}`)
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

export const login = userId => async dispatch => {
  try {
    const res = await axios.get(`/users/${userId}`)
    dispatch(gotUser(res.data))
    // history.push(`/`)
  } catch (err) {
    console.error(err)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post(`/auth/logout`)
    dispatch(gotRemoveUser())
    history.push(`/login`)
  } catch (err) {
    console.error(err)
  }
}

export const me = () => async dispatch => {
  try {
    const res = await axios.get(`/auth/me`)
    dispatch(gotUser(res.data || initialState))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(gotUser({error: authError}))
  }
  try {
    dispatch(gotUser(res.data))
    history.push(`/`)
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
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
    case WRITE_NEW_USER:
      const actionKey = Object.keys(action.info)
      return {
        ...state,
        newUser: {
          ...state.newUser,
          [actionKey]: action.info[actionKey]
        }
      }
    default:
      return state
  }
}
