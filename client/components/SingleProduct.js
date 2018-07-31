import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/product'
import {fetchCartProducts, fetchProductToAdd} from '../store/cart'
import {fetchReviewsByProduct} from '../store/review'
import Reviews from './Reviews'
import {Card, Image, Button} from 'semantic-ui-react'

function twoDecimals(price) {
  return price.toFixed(2)
}

class SingleProduct extends Component {
  constructor() {
    super()
    this.componentDidMount = this.componentDidMount.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  async componentDidMount() {
    await this.props.loadSingleProduct()
    console.log('FIX USER ID LATER!!!!!: ')
    await this.props.loadCartProducts(1)
    await this.props.loadReviews(this.props.match.params.productId)
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
            <span className="date">{this.props.reviews.length} reviews</span>
          </Card.Meta>
          <Card.Description>{singleProduct.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className="ui tag labels">
          <a className="ui label">
            <i className="dollar sign icon">
              {singleProduct.price ? twoDecimals(singleProduct.price) : null}
            </i>
          </a>
        </div>
        </Card.Content>
        <Card.Content extra>
          <Button color = 'green' animated onClick={() => {this.onClick(singleProduct.id)}}>
              <Button.Content hidden>Add</Button.Content>
              <Button.Content visible><i className="shop icon" /></Button.Content>
          </Button>
        </Card.Content>
        {this.props.reviews && <Reviews reviews= {this.props.reviews} productId= {singleProduct.id} />}
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
    products: state.cartState.products,
    reviews: state.reviewState.reviewsByProduct
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
    },
    loadReviews: productId => {
      dispatch(fetchReviewsByProduct(productId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
