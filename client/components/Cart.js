import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCartProducts } from '../store/cart'
import { NavLink } from 'react-router-dom';


function twoDecimals(price) {
  return price.toFixed(2)
}

class Cart extends Component {
  render() {
    const products = this.props.products
    console.log(Object.keys(products).length)
    return (
      <div className="ui items">
        <h1>Cart</h1>
        {Object.keys(products).length ? (
          <React.Fragment>
            {Object.keys(products).map(key => {
              return (
                <div className="item" key={products[key].id}>
                  <div className="ui small image">
                    <img src={products[key].imageUrl} />
                  </div>
                  <div className="content">
                    <div className="header">{products[key].name}</div>
                    <div className="meta">
                      <span className="price">Price: ${twoDecimals(products[key].price)}</span>
                    </div>
                    <div className="meta">
                      <span className="quantity">
                        Quantity: {products[key].quantity}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
            <NavLink to="/checkout">
              Go to Checkout
        </NavLink>
          </React.Fragment>
        ) : (
            <h2>No products in cart yet</h2>
          )
        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.cartState.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCartProducts: () => {
      dispatch(fetchCartProducts(ownProps.match.params.userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
