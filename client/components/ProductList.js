import React, { Component } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import { connect } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import ProductCard from './ProductCard'
import { fetchAllProducts } from '../store/product'

class ProductList extends Component{
    componentDidMount(){
      this.props.loadProducts()
    }
    render(){
      const products = this.props.products
      return(
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
    return{
      products: state.productState.products
    }
  }

  const mapDispatchToProps = dispatch =>{
    return {
      loadProducts: () =>{
        dispatch(fetchAllProducts())
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
