import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'
import {Menu} from 'semantic-ui-react'
import {fetchCartProducts} from '../store/cart'

const getTotal = products => {
  let count = 0
  for (let key in products) {
    if (products[key].id) {
      count += products[key].quantity
    }
  }
  return count
}

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleItemClick = this.handleItemClick.bind(this)
    if (this.currUser) {
      this.loadCartProducts(this.currUser.id)
    }
  }

  handleItemClick(event, {name}) {
    event.preventDefault()
    this.setState({activeItem: name})
  }

  render() {
    const {activeItem} = this.state
    const products = this.props.products
    const isLoggedIn = this.props.isLoggedIn
    return (
      <div className="ui items">
        {isLoggedIn ? (
          <Menu>
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
              <NavLink to="/" activeClassName="active">
                Home <span className="sr-only" />
              </NavLink>
            </Menu.Item>
            <Menu.Item
              name="cart"
              active={activeItem === 'cart'}
              onClick={this.handleItemClick}
            >
              <NavLink to="/cart" activeClassName="active">
                Your Cart ({products ? getTotal(products) : '0'}){' '}
                <span className="sr-only" />
              </NavLink>
            </Menu.Item>
            <Menu.Item
              name="profile"
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}
            >
              <NavLink
                to={`/users/${this.props.currUser.id}`}
                activeClassName="active"
              >
                Your Profile <span className="sr-only" />
              </NavLink>
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.props.handleLogout}
            >
              <NavLink
                to="/login"
                activeClassName="active"
                onClick={this.props.handleClick}
              >
                Logout <span className="sr-only" />
              </NavLink>
            </Menu.Item>
          </Menu>
        ) : (
          <Menu>
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
              <NavLink to="/" activeClassName="active">
                Home <span className="sr-only" />
              </NavLink>
            </Menu.Item>
            <Menu.Item
              name="cart"
              active={activeItem === 'cart'}
              onClick={this.handleItemClick}
            >
              <NavLink to="/cart" activeClassName="active">
                Your Cart ({products ? getTotal(products) : '0'}){' '}
                <span className="sr-only" />
              </NavLink>
            </Menu.Item>
            <Menu.Item
              name="login"
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            >
              <NavLink to="/login" activeClassName="active">
                Login <span className="sr-only" />
              </NavLink>
            </Menu.Item>
            <Menu.Item
              name="signup"
              active={activeItem === 'signup'}
              onClick={this.handleItemClick}
            >
              <NavLink to="/signup" activeClassName="active">
                Signup <span className="sr-only" />
              </NavLink>
            </Menu.Item>
          </Menu>
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    currUser: state.userState.currUser,
    isLoggedIn: !!state.userState.currUser.id,
    products: state.cartState.products
  }
}

const mapDispatch = dispatch => {
  return {
    handleLogout: () => {
      dispatch(logout())
    },
    loadCartProducts: userId => {
      dispatch(fetchCartProducts(userId))
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
