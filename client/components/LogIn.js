import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth, login, writeNewUser} from '../store'

/**
 * COMPONENT
 */

class Login extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.props.writeNewUser({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.loadUser(this.props.newUser)
    // console.log(this.props.history.push)
  }

  render() {
    console.log('this.props: ', this.props)
    return (
      <React.Fragment>
        <form className="ui form">
          <h4 className="ui dividing header">Login info:</h4>
          <div className="field">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              required
              type="text"
              name="email"
              placeholder="Email"
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
            />
          </div>
          <button
            className="ui button"
            type="submit"
            tabIndex="0"
            onClick={this.handleSubmit}
          >
            Login
          </button>
        </form>
      </React.Fragment>
    )
  }
}

// export default connect(
//   state => ({
//     currUser: state.userState.currUser,
//     newUser: state.userState.newUser
//   }),
//   dispatch => ({
//     writeNewUser: info => {
//       dispatch(writeNewUser(info))
//     },
//     newUserFunc: user => {
//       dispatch(newUser(user))
//     }
//   })
// )(Login)

// const Login = props => {
//   console.log()
//   const {name, displayName, handleSubmit, error} = props

//   return (
// <div>
//   <form onSubmit={handleSubmit} name="login">
//     <div>
//       <label htmlFor="email">
//         <small>Email</small>
//       </label>
//       <input name="email" type="text" />
//     </div>
//     <div>
//       <label htmlFor="password">
//         <small>Password</small>
//       </label>
//       <input name="password" type="password" />
//     </div>
//     <div>
//       <button type="submit">{displayName}</button>
//     </div>
//     {error && error.response && <div> {error.response.data} </div>}
//   </form>
// </div>
//   )
// }

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */

const mapStateToProps = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.userState.currUser.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    },
    writeNewUser: info => {
      dispatch(writeNewUser(info))
    },
    loadUser: user => {
      dispatch(login(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

/**
 * PROP TYPES
 */
// Login.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// }
