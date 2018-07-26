import React from 'react'
import {NavLink} from 'react-router-dom'
import {Card, Icon, Image} from 'semantic-ui-react'

const ProductCard = props => {
  const product = props.product
  return (
    <Card>
      <Image src={product.imageUrl} />
      <Card.Content>
        <NavLink to={`/api/products/${product.id}`} activeClassName="active">
          <Card.Header>{product.name}</Card.Header>
        </NavLink>

        <Card.Meta>
          <span className="date">Number of reviews or stars here??</span>
        </Card.Meta>
        <Card.Description>{product.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          ${product.price}
        </a>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          Add to cart
        </a>
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
