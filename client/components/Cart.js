import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCartProducts} from '../store/cart'

function twoDecimals(price) {
  return price.toFixed(2)
}

class Cart extends Component {
  constructor() {
    super()
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    this.props.loadCartProducts()
  }

  findQuantity(productName) {
    const productsArr = this.props.products
    let quantity = 0
    for (let i = 0; i < productsArr.length; i++) {
      if (productsArr[i].name === productName) {
        quantity++
      }
    }
    return quantity
  }

  render() {
    const products = this.props.products
    return (
      <div className="ui items">
        <h1>Cart</h1>
        {products.length ? (
          products.map(product => {
            return (
              <div className="item" key={product.id}>
                <div className="ui small image">
                  <img src={product.imageUrl} />
                </div>
                <div className="content">
                  <div className="header">{product.name}</div>
                  <div className="meta">
                    <span className="price">${twoDecimals(product.price)}</span>
                  </div>
                  <div className="meta">
                    <span className="quantity">
                      {this.findQuantity(product.name)}
                    </span>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <h2>No products in cart yet</h2>
        )}
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
