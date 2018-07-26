import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/product'
import {Button, Card} from 'semantic-ui-react'
import ProductCard from './ProductCard'

class ProductList extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }
  render() {
    const products = this.props.products
    console.log('products: ', products)
    return (
      <div>
        <h2>Grass For Sale</h2>
        <Card.Group centered products={products}>
          {products.map(product => {
            return <ProductCard key={product.id} product={product} />
          })}
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.productState.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: () => {
      dispatch(fetchAllProducts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
