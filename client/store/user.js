import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const NEW_USER = `NEW_USER`
const GET_USER = `GET_USER`
const REMOVE_USER = `REMOVE_USER`
const WRITE_NEW_USER = 'WRITE_NEW_USER'

/**
 * INITIAL STATE
 */
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

/**
 * ACTION CREATORS
 */
const newUserAct = user => ({type: NEW_USER, user})
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
export const writeNewUser = info => ({type: WRITE_NEW_USER, info})

/**
 * THUNK CREATORS
 */
export const newUser = user => async dispatch => {
  try {
    const res = await axios.post(`/api/users`, user)
    dispatch(newUserAct(res.data))
    history.push(`/`)
  } catch (err) {
    console.error(err)
  }
}

export const me = () => async dispatch => {
  try {
    const res = await axios.get(`/auth/me`)
    dispatch(getUser(res.data || initialState))
  } catch (err) {
    console.error(err)
  }
}

export const login = () => async dispatch => {
  try {
    const res = await axios.get(`/auth/login`)
    dispatch(getUser(res.data))
    history.push(`/`)
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }
  try {
    dispatch(getUser(res.data))
    history.push(`/`)
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post(`/auth/logout`)
    dispatch(removeUser())
    history.push(`/login`)
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
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
