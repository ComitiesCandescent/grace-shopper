import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {me} from '../store/users'

class UserProfile extends Component {
  componentDidMount() {
    this.props.loadSingleUser()
  }

  render() {
    const user = this.props.user
    return (
      <div>
        <img src="img.jpg" />
        <h1>{user.name}</h1>
        <a>E-Mail: {user.email}</a>
        <p>- Address -</p>
        <a>Street: {user.street}</a>
        <a>City: {user.city}</a>
        <a>State: {user.state}</a>
        <a>ZipCode: {user.zipcode}</a>
        <NavLink to={`/user/${user.id}`}>Update</NavLink>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    singleUser: state.userState.productState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => {
      dispatch(me())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
