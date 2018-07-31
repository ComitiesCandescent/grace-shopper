import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../store/product'
import { addProduct } from '../store/cart'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { Alert } from 'react-alert'

function twoDecimals(price) {
  return price.toFixed(2)
}

class SingleProduct extends Component {


  componentDidMount() {
    this.props.loadSingleProduct()
    console.log(`FIX USER ID LATER!!!!!: `)

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
                <Button animated onClick={() => {
                  this.props.alert.success(<div style={{
                    border: `0.5px solid green`,
                    borderRadius: `5px`,
                    backgroundColor: `white`,
                    padding: `5px`,
                    fontColor: `#49fcff`,
                    alignContent: `center`
                  }}><a>{this.props.name}   </a><Icon name='arrow right' /> <Icon name='shop' /></div>)
                  this.props.handleClick()
                }}>
                  <Button.Content hidden>Add</Button.Content>
                  <Button.Content visible>
                    <i className="shop icon" />
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
