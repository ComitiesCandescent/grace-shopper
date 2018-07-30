import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../store/product'
import { fetchCartProducts, fetchProductToAdd } from '../store/cart'
import { Card, Image, Icon } from 'semantic-ui-react'

function twoDecimals(price) {
  return price.toFixed(2)
}

class SingleProduct extends Component {


  componentDidMount() {
    this.props.loadSingleProduct()
    console.log(`FIX USER ID LATER!!!!!: `)

  }

  onClick(product) {
    this.props.loadProduct(product)
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
            <Button type="button"
              className="ui button active"
              onClick={this.onClick} animated='vertical'>
              <Button.Content hidden>Add</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
            </Button>
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

    loadProduct: product => {
      dispatch(addProduct(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
