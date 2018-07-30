import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {addProduct} from '../store/cart'
import {Card, Image, Button} from 'semantic-ui-react'

function twoDecimals(price) {
  return price.toFixed(2)
}

class ProductCard extends React.Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.loadProduct(this.props.product)
  }

  render() {
    const product = this.props.product
    return (
      <Card>
        <Image src={product.imageUrl} />
        <Card.Content>
          <NavLink to={`/${product.id}`} activeClassName="active">
            <Card.Header>{product.name}</Card.Header>
          </NavLink>
          <Card.Meta>
            <div className="extra">
              Rating:
              <div className="ui star rating" data-rating="3" />
            </div>
          </Card.Meta>
          <Card.Description>{product.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <i className="dollar sign icon">{twoDecimals(product.price)}</i>
        </Card.Content>
        <Card.Content extra>
          <div className="ui vertical animated button" tabIndex="0">
            <Button
              type="button"
              className="ui button active"
              onClick={this.onClick}
            >
              <div className="hidden content">Add</div>
              <div className="visible content">
                <i className="shop icon" />
              </div>
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProduct: product => {
      dispatch(addProduct(product))
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductCard)
