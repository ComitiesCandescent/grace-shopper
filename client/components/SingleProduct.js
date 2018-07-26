import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/product'
import {Card, Icon, Image, Button} from 'semantic-ui-react'

function twoDecimals(price) {
  return price.toFixed(2)
}

class SingleProduct extends Component {
  componentDidMount() {
    this.props.loadSingleProduct()
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
            <div className="hidden content">Add</div>
            <div className="visible content">
              <i className="shop icon" />
            </div>
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
    singleProduct: state.productState.singleProduct
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadSingleProduct: () => {
      dispatch(fetchSingleProduct(ownProps.match.params.productId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
