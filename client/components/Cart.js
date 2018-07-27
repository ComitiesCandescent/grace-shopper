import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCartProducts} from '../store/cart'
import {Card, Image} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

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
                    <span className="price">$1200</span>
                    <span className="stay">1 Month</span>
                  </div>
                  <div className="description">
                    <p />
                  </div>
                </div>
              </div>

              // <Card key={product.id}>
              //   <Image src={product.imageUrl} />
              //   <Card.Content>
              //     <NavLink to={`/${product.id}`} activeClassName="active">
              //       <Card.Header>{product.name}</Card.Header>
              //     </NavLink>
              //     <Card.Description>{product.description}</Card.Description>
              //   </Card.Content>
              //   <Card.Content extra>
              //     <i className="dollar sign icon">
              //       {twoDecimals(product.price)}
              //     </i>
              //   </Card.Content>
              // </Card>
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
