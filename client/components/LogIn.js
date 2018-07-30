import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUser, writeNewUser} from '../store'
import PropTypes from 'prop-types'
import {auth} from '../store'

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
    console.log(' this.props: ', this.props)
    this.props.loadUser(this.props.currUser.id)
  }

  render() {
    return (
      <React.Fragment>
        <form className="ui form">
          <h4 className="ui dividing header">Login</h4>
          <div className="field">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              required
              type="text"
              name="email"
              placeholder="Email"
              value={this.props.currUser.name}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              onChange={this.handleChange}
              required
              type="text"
              name="password"
              placeholder="Password"
              value={this.props.currUser.name}
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

const mapStateToProps = state => {
  return {
    currUser: state.userState.currUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    writeNewUser: info => {
      dispatch(writeNewUser(info))
    },
    loadUser: userId => {
      dispatch(fetchUser(userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

// const Login = props => {
//   const {name, displayName, handleSubmit, error} = props
//   return (
//     <div>
//       <form onSubmit={handleSubmit} name="login">
//         <div>
//           <label htmlFor="email">
//             <small>Email</small>
//           </label>
//           <input name="email" type="text" />
//         </div>
//         <div>
//           <label htmlFor="password">
//             <small>Password</small>
//           </label>
//           <input name="password" type="password" />
//         </div>
//         <div>
//           <button type="submit">{displayName}</button>
//         </div>
//         {error && error.response && <div> {error.response.data} </div>}
//       </form>
//       {/* <a href="/auth/google">{displayName} with Google</a> */}
//     </div>
//   )
// }

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */

// const mapLogin = state => {
//   return {
//     name: 'login',
//     displayName: 'Login',
//     error: state.userState.currUser.error
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleSubmit(evt) {
//       evt.preventDefault()
//       const formName = evt.target.name
//       const email = evt.target.email.value
//       const password = evt.target.password.value
//       dispatch(auth(email, password, formName))
//     }
//   }
// }

// export default connect(mapLogin, mapDispatch)(Login)

// /**
//  * PROP TYPES
//  */
// Login.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// }
