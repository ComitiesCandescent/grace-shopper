import React from 'react'
import {NavLink} from 'react-router-dom'
import {Card, Image, Button} from 'semantic-ui-react'

function twoDecimals(price) {
  return price.toFixed(2)
}

const ProductCard = props => {
  const product = props.product
  return (
    <Card>
      <Image src={product.imageUrl} />
      <Card.Content>
        <NavLink to={`/${product.id}`} activeClassName="active">
          <Card.Header>{product.name}</Card.Header>
        </NavLink>

        <Card.Meta>
          <span className="date">Number of reviews or stars here??</span>
        </Card.Meta>
        <Card.Description>{product.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <i className="dollar sign icon">{twoDecimals(product.price)}</i>
      </Card.Content>
      <Card.Content extra>
        <div className="ui vertical animated button" tabIndex="0">
          <div className="hidden content">Add</div>
          <div className="visible content">
            <i className="shop icon" />
          </div>
        </div>
      </Card.Content>
    </Card>

    // <div className="singleProduct">
    //   <div>
    //     <NavLink to={`/api/products/${product.id}`} activeClassName="active">
    //       <h3>{product.name}</h3>
    //     </NavLink>
    //     <img src={product.imageUrl} />
    //     <h4>{product.description}</h4>
    //     <h4>${product.price}</h4>
    //   </div>
    //   <div>
    //     <select>{/* quantity options */}</select>
    //     <button type="button">Add To Cart</button>
    //   </div>
    // </div>
  )
}

export default ProductCard
