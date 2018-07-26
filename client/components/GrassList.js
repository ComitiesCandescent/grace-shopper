import React from 'react'
import {connect} from 'react-redux'
import Grass from './Grass'

function GrassList(props) {
  const products = props.products
  return (
    <div>
      <h2>Grass For Sale</h2>
      {products.map(product => {
        return (
          <li key={product.id}>
            <Grass product={product} />
          </li>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(GrassList)
