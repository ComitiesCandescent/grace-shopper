import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUser, deleteUser} from '../store'
import {NavLink} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

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
            <NavLink to="/" onClick={() => this.props.deleteThisUser()}>
              <Button content="Delete Account" />
            </NavLink>
          </React.Fragment>
        ) : (
          <div>
            <h2>No user currently logged in.</h2>
            <h3>Why don't you log in or sign up?</h3>
          </div>
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
    },
    deleteThisUser: () => {
      dispatch(deleteUser(ownProps.match.params.userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
