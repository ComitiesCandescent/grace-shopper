import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'

/**
 * COMPONENT
 */
const Login = props => {
  const { name, displayName, handleSubmit, error } = props

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

<<<<<<< HEAD
  /**
   * CONTAINER
   *   Note that we have two different sets of 'mapStateToProps' functions -
   *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
   *   function, and share the same Component. This is a good example of how we
   *   can stay DRY with interfaces that are very similar to each other!
   */
  const mapLogin = state => {
    return {
      name: `login`,
      displayName: `Login`,
      error: state.userState.currUser.error
=======
  render() {
    return (
      <React.Fragment>
        <form
          className="ui form"
          onSubmit={event => this.props.handleSubmit(event, this.state.email)}
        >
          <h4 className="ui dividing header">Login</h4>
          <div className="field">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              required
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              onChange={this.handleChange}
              required
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
            />
          </div>
          <button className="ui button" type="submit" tabIndex="0">
            Login
          </button>
        </form>
      </React.Fragment>
    )
>>>>>>> master
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      handleSubmit: async (event, email) => {
        try {
          event.preventDefault()
          const userAction = await dispatch(fetchUserByEmail(email))
          ownProps.history.push(`/users/${userAction.user.id}`)
        } catch (err) {
          console.error(err)
        }
      }
    }
  }

  export default connect(null, mapDispatchToProps)(Login)
