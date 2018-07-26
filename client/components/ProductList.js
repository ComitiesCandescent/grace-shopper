import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/product'
// import ProductCard from './ProductCard'

class ProductList extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }
  render() {
    const products = this.props.products
    return (
      <div>
        <h2>Grass For Sale</h2>
        {/* {products.map(product =>{
            <ProductCard product = {product}/>
          })} */}
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
