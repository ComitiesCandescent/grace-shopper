import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../store/product'
import { addProduct } from '../store/cart'
import {fetchReviewsByProduct} from '../store/review'
import Reviews from './Reviews'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { Alert } from 'react-alert'

function twoDecimals(price) {
  return price.toFixed(2)
}

class SingleProduct extends Component {


  async componentDidMount() {
    await this.props.loadSingleProduct()
    console.log('FIX USER ID LATER!!!!!: ')
    //await this.props.loadCartProducts(1)
    await this.props.loadReviews(this.props.match.params.productId)
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
          <div className="ui vertical animated button" tabIndex="0">
          <Card.Content extra>
            <Alert >

              {alert => (
                <Button
                  color = 'green' onClick={() => {
                    alert.success(<div style={{
                      border: `0.5px solid green`,
                      borderRadius: `5px`,
                      backgroundColor: `white`,
                      padding: `5px`,
                      fontColor: `#49fcff`,
                      alignContent: `center`
                    }}><a>{singleProduct.name}   </a><Icon name='arrow right' /> <Icon name='shop' /></div>)
                    this.props.addProduct({ product: singleProduct, userId: this.props.currUser.id })
                  }} animated>
                  <Button.Content hidden>Add</Button.Content>
                  <Button.Content visible><i className="shop icon" /></Button.Content>
                </Button>
              )}
            </Alert>
            </Card.Content>
          </div>
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
    currUser: state.userState.currUser,
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

    addProduct: product => {
      dispatch(addProduct(product))
    },
    loadReviews: productId => {
      dispatch(fetchReviewsByProduct(productId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
