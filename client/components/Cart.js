import React from 'react'
import {connect} from 'react-redux'
import {fetchCartProducts} from '../store'
import {NavLink} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

const twoDecimals = price => {
  return price.toFixed(2)
}

const Cart = props => {
  const products = props.products
  let totalCost = 0
  for (let key in products) {
    if (products[key].id) {
      totalCost += products[key].price * products[key].quantity
    }
  }
  return (
    <div className="ui items">
      {Object.keys(products).length ? (
        <React.Fragment>
          <h1>Your Cart</h1>
          {Object.keys(products).map(key => {
            return (
              <div className="item" key={products[key].id}>
                <div className="ui small image">
                  <img src={products[key].imageUrl} />
                </div>
                <div className="content">
                  <div className="header">{products[key].name}</div>
                  <div className="meta">
                    <span className="price">
                      Price: ${twoDecimals(products[key].price)}
                    </span>
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
          <a>Total Cost: ${totalCost.toFixed(2)}</a>
          <NavLink to="/checkout">
            <Button content="Checkout" />
          </NavLink>
        </React.Fragment>
      ) : (
        <div>
          <h2>No products currently in cart.</h2>
          <h3>Why don't you add some?</h3>
        </div>
      )}
    </div>
  )
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
