import React from 'react'
import {connect} from 'react-redux'
import {editUser} from '../store'
import Form from './Form'

const EditUser = ({handleSubmit, currUser}) => {
  return (
    <div>
      <h1>Edit Your Profile</h1>
      <Form initData={currUser} handleSubmit={handleSubmit} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currUser: state.userState.currUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: (event, userData) => {
    event.preventDefault()
    const userId = ownProps.match.params.userId
    dispatch(editUser(userData, userId))
      .then(() => ownProps.history.push(`/users/${userId}`))
      .catch(err => console.error(err))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
