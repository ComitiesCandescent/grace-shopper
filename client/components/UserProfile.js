import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../store/user'

class UserProfile extends Component {
  componentDidMount() {
    this.props.loadUser()
  }

  render() {
    const user = this.props.currUser
    return (
      <div className="ui items">
        {user.name ? (
          <React.Fragment>
            <h1>Your Profile</h1>
            <h4>Name</h4>
            <p>{user.name}</p>
            <h4>Email</h4>
            <p>{user.email}</p>
            <h4>Address</h4>
            <p>{user.street}</p>
            <p>
              {user.city}, {user.state} {user.zipcode}
            </p>
          </React.Fragment>
        ) : (
          <h2>No user currently logged in.</h2>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currUser: state.userState.currUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadUser: () => {
      dispatch(fetchUser(ownProps.match.params.userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
