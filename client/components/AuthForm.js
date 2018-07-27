import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newUser, writeNewUser} from '../store'

/**
 * COMPONENT
 */
class AuthForm extends Component {
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
    this.props.newUserFunc(this.props.newUser)
    console.log('looking for history push', this)
  }
  render() {
    return (
      <React.Fragment>
        <form className="ui form">
          <h4 className="ui dividing header">Signup info:</h4>
          <div className="field">
            <label>Name</label>
            <div className="two fields">
              <div className="field">
                <input
                  onChange={this.handleChange}
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.props.currUser.name}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Billing Address</label>
            <div className="fields">
              <div className="twelve wide field">
                <input
                  onChange={this.handleChange}
                  required
                  type="text"
                  name="street"
                  placeholder="Street Address"
                  value={this.props.currUser.street}
                />
              </div>
              <div className="four wide field">
                <label>City</label>
                <input
                  onChange={this.handleChange}
                  required
                  type="text"
                  name="city"
                  placeholder="city"
                  value={this.props.currUser.city}
                />
              </div>
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>State</label>
              <select
                name="state"
                onChange={this.handleChange}
                required
                className="ui fluid dropdown"
              >
                <option value="">State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              <div className="four wide field">
                <input
                  onChange={this.handleChange}
                  required
                  type="number"
                  name="zipcode"
                  placeholder="zipcode"
                  value={this.props.currUser.zipcode}
                />
              </div>
              <div className="field">
                <label>E-mail Address:</label>
                <div className="fields">
                  <div className="twelve wide field">
                    <input
                      onChange={this.handleChange}
                      required
                      type="text"
                      name="email"
                      placeholder="E-mail Address"
                      value={this.props.currUser.email}
                    />
                  </div>
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="fields">
                  <div className="twelve wide field">
                    <input
                      onChange={this.handleChange}
                      required
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={this.props.currUser.password}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button"
              type="submit"
              tabIndex="0"
              onClick={this.handleSubmit}
            >
              Submit Order
            </button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateTothis.Props' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchTothis.Props'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
export default connect(
  state => ({
    currUser: state.userState.currUser,
    newUser: state.userState.newUser
  }),
  dispatch => ({
    writeNewUser: info => {
      dispatch(writeNewUser(info))
    },
    newUserFunc: user => {
      dispatch(newUser(user))
    }
  })
)(AuthForm)
