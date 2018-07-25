import react, {Component} from 'react'
import { connect } from 'react-redux';
import Grass from './Grass'

function GrassList(props){
    const products = props.products
    return(
      <div>
        <h2>Grasses For Sale</h2>
        {products.map(product =>{
          <Grass />
        })}
      </div>
    )
  }
