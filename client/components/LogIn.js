import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUserByEmail, fetchCartProducts} from '../store'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: ``,
      password: ``
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui teal image header" />
            <div className="content">Login to your account</div>
            <form
              className="ui large form"
              onSubmit={event =>
                this.props.handleSubmit(event, this.state.email)
              }
            >
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon" />
                    <input
                      onChange={this.handleChange}
                      required
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon" />
                    <input
                      onChange={this.handleChange}
                      required
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                    />
                  </div>
                </div>
                <button
                  className="ui fluid large green submit button"
                  type="submit"
                  tabIndex="0"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapState = state => {
  return {
    guest: state.userState.guest
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: async (event, email) => {
      try {
        event.preventDefault()
        const userAction = await dispatch(fetchUserByEmail(email))
        await dispatch(fetchCartProducts(userAction.user.id))
        ownProps.history.push(`/users/${userAction.user.id}`)
      } catch (err) {
        console.error(err)
      }
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Login)
