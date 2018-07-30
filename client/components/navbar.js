import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'

const Navbar = props => {
  const userId = props.currUser.id
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li className="active">
              <NavLink to="/" activeClassName="active">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="active">
              <NavLink to="/cart" activeClassName="active">
                Your Cart <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            {props.isLoggedIn ? (
              <div>
                <li className="active">
                  <NavLink to={`/users/${userId}`} activeClassName="active">
                    Your Profile <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="active">
                  <NavLink
                    to="/login"
                    activeClassName="active"
                    onClick={props.handleClick}
                  >
                    Logout <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
              </div>
            ) : (
              <div>
                <li className="active">
                  <NavLink to="/login" activeClassName="active">
                    Login <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="active">
                  <NavLink to="/signup" activeClassName="active">
                    Signup <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

const mapState = state => {
  return {
    currUser: state.userState.currUser,
    isLoggedIn: !!state.userState.currUser.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
