import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUserByEmail} from '../store'
// import PropTypes from 'prop-types'
// import {auth} from '../store'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

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
              type="text"
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
