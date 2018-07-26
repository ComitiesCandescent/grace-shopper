import React, {Component} from 'react'
import {connect} from 'react-redux'

class Cart extends Component {
  componentDidMount() {
    console.log('mounted')
    // this.props.loadProducts()
  }

  render() {
    return <h1>Cart</h1>
  }
}

const mapStateToProps = state => {
  return {
    // singleCampus: campus,
    // enrolledStudents: enrolledStudents
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // loadCampus: () => {
    //   dispatch(fetchSingleCampus(ownProps.match.params.campusId))
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
