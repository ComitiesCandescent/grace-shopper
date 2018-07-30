import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/product'
import {fetchCartProducts, fetchProductToAdd} from '../store/cart'
import {Card, Image} from 'semantic-ui-react'

function twoDecimals(price) {
  return price.toFixed(2)
}

class SingleProduct extends Component {
  constructor() {
    super()
    this.componentDidMount = this.componentDidMount.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    this.props.loadSingleProduct()
    console.log('FIX USER ID LATER!!!!!: ')
    this.props.loadCartProducts(1)
  }

  onClick(productId) {
    this.props.loadProduct(productId)
  }

  render() {
    const singleProduct = this.props.singleProduct
    return (
      <Card fluid color="blue">
        <Image src={singleProduct.imageUrl} />
        <Card.Content>
          <Card.Header>{singleProduct.name}</Card.Header>
          <Card.Meta>
            <span className="date">Number of reviews or stars here??</span>
          </Card.Meta>
          <Card.Description>{singleProduct.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <i className="dollar sign icon">
            {singleProduct.price ? twoDecimals(singleProduct.price) : null}
          </i>
        </Card.Content>
        <Card.Content extra>
          <div className="ui vertical animated button" tabIndex="0">
            <button
              type="button"
              className="ui button active"
              onClick={() => {
                this.onClick(singleProduct.id)
              }}
            >
              <div className="hidden content">Add</div>
              <div className="visible content">
                <i className="shop icon" />
              </div>
            </button>
          </div>
        </Card.Content>
      </Card>
    )
    //    {/* {singleProduct.reviews.map(review => (
    //         <li key={review.id}>
    //           {review.name} wrote: {review.description}
    //         </li>
    //       ))} */}
  }
}

const mapStateToProps = state => {
  return {
    singleProduct: state.productState.singleProduct,
    products: state.cartState.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadSingleProduct: () => {
      dispatch(fetchSingleProduct(ownProps.match.params.productId))
    },
    loadCartProducts: userId => {
      dispatch(fetchCartProducts(userId))
    },
    loadProduct: productId => {
      dispatch(fetchProductToAdd(productId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
