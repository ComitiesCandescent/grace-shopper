import React from 'react'
import Navbar from '../navbar'
// import {connect} from 'react-redux'

const Cart = () => {
  return (
    <div>
      <Navbar />
      <h1>cart HERE</h1>
    </div>
  )
}

export default Cart

// const mapStateToProps = state => {
//   return {
//     singleCampus: campus,
//     enrolledStudents: enrolledStudents
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     loadCampus: () => {
//       dispatch(fetchSingleCampus(ownProps.match.params.campusId))
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Cart)
