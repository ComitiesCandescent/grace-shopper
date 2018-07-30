import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUserByEmail} from '../store'

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
