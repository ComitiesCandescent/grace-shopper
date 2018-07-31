<<<<<<< HEAD
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../store/product'
import { addProduct } from '../store/cart'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { Alert } from 'react-alert'
=======
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/product'
import {fetchCartProducts, fetchProductToAdd} from '../store/cart'
import {fetchReviewsByProduct} from '../store/review'
import Reviews from './Reviews'
import {Card, Image, Button} from 'semantic-ui-react'
>>>>>>> master

function twoDecimals(price) {
  return price.toFixed(2)
}

class SingleProduct extends Component {


  componentDidMount() {
    this.props.loadSingleProduct()
<<<<<<< HEAD
    console.log(`FIX USER ID LATER!!!!!: `)

=======
    console.log('FIX USER ID LATER!!!!!: ')
    this.props.loadCartProducts(1)
    this.props.loadReviews(this.props.match.params.productId)
>>>>>>> master
  }

  onClick(product) {
    this.props.alert.success(<div style={{
      border: `0.5px solid green`,
      borderRadius: `5px`,
      backgroundColor: `white`,
      padding: `5px`,
      fontColor: `#49fcff`,
      alignContent: `center`
    }}><a>{this.props.name}   </a><Icon name='arrow right' /> <Icon name='shop' /></div>)
    this.props.addProduct(product)
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

            <Alert>
              {alert => (
                <Button type="button"
                  className="ui button active"
                  onClick={() => {
                    alert.success(<div style={{
                      border: `0.5px solid green`,
                      borderRadius: `5px`,
                      backgroundColor: `white`,
                      padding: `5px`,
                      fontColor: `#49fcff`,
                      alignContent: `center`
                    }}><a>{singleProduct.name}   </a><Icon name='arrow right' /> <Icon name='shop' /></div>)
                    this.props.addProduct(singleProduct)
                  }} animated='vertical'>
                  <Button.Content hidden>Add</Button.Content>
                  <Button.Content visible>
                    <Icon name='shop' />
                  </Button.Content>
                </Button>
              )}
            </Alert>
          </div>
        </Card.Content>
        <Reviews reviews={this.props.reviews} />
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
<<<<<<< HEAD

    addProduct: product => {
      dispatch(addProduct(product))
=======
    loadCartProducts: userId => {
      dispatch(fetchCartProducts(userId))
    },
    loadProduct: productId => {
      dispatch(fetchProductToAdd(productId))
    },
    loadReviews: productId => {
      dispatch(fetchReviewsByProduct(productId))
>>>>>>> master
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
