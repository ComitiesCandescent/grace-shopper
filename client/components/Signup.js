import React from 'react'
import {connect} from 'react-redux'
import {postUser} from '../store'
import Form from './Form'

const Signup = ({handleSubmit}) => {
  return (
    <div>
      <h1>Signup</h1>
      <Form handleSubmit={handleSubmit} />
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: async (event, userData) => {
      try {
        event.preventDefault()
        const userAction = await dispatch(postUser(userData))
        ownProps.history.push(`/users/${userAction.user.id}`)
      } catch (err) {
        console.error(err)
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(Signup)
