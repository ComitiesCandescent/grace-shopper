import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
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
            <NavLink to="/login" activeClassName="active">
              Login <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="active">
            <NavLink to="/signup" activeClassName="active">
              Signup <span className="sr-only">(current)</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  // <div>
  //   <h1>Grass R Us2</h1>
  //   <nav>
  //     {isLoggedIn ? (
  //       <div>
  //         {/* The navbar will show these links after you log in */}
  //         <Link to="/home">Home of Grass</Link>
  //         <a href="#" onClick={handleClick}>
  //           Logout
  //         </a>
  //       </div>
  //     ) : (
  //         <div>
  //           {/* The navbar will show these links before you log in */}
  //           <Link to="/login">Login</Link>
  //           <Link to="/signup">Sign Up</Link>
  //         </div>
  //       )}
  //   </nav>
  //   <hr />
  // </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
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

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
