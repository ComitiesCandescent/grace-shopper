import react, {Component} from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'


function Grass(props){
    const product = props.product
    return(
      <div className = 'singleProduct'>
        <div>
          {/* this link will go to the single grass view */}
          <Link>
            <h3>{product.name}</h3>
          </Link>
          <img src = ''/>
          <h4>{product.description}</h4>
          <h4>{product.price}</h4>
        </div>
        <div>
          <select>
            {/* quantity options */}
          </select>
          <button>Add To Cart</button>
        </div>
      </div>
    )
  }


