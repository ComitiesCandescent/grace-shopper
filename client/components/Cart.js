import React, {Component} from 'react'
// import {connect} from 'react-redux'
import Navbar from '../navbar'

export default class SingleCampus extends Component {
  constructor() {
    super()
    this.deleteCampus = this.deleteCampus.bind(this)
  }

  componentDidMount() {
    this.props.loadCampus()
    this.props.loadStudents()
  }

  deleteCampus(campusId) {
    const enrolledStudents = this.props.enrolledStudents
    enrolledStudents.forEach(student => {
      this.props.deleteThisStudent(student.id)
    })
    this.props
      .deleteThisCampus(campusId)
      .then(() => this.props.history.push('/campuses'))
      .catch(err => console.error(err))
  }

  render() {
    const campus = this.props.singleCampus
    const campusId = Number(this.props.match.params.campusId)
    const enrolledStudents = this.props.enrolledStudents
    if (!campus) return <div>loading single campuses...</div>
    return (
      <div>
        <Navbar />
        <h2>{campus.name}</h2>
        <h4>Enrolled Students in Database</h4>
        {enrolledStudents.length > 0 ? (
          <div id="items">
            {enrolledStudents.map(student => {
              return (
                <div key={student.id}>
                  <NavLink
                    to={'/students/' + student.id}
                    activeClassName="active"
                  >
                    <p>
                      <span>{`${student.firstName} ${student.lastName}`}</span>
                    </p>
                  </NavLink>
                </div>
              )
            })}
            <p>Total: {enrolledStudents.length}</p>
          </div>
        ) : (
          <div>
            <p>There are no students yet!</p>
            <NavLink to="/students/create-student" activeClassName="active">
              <span>
                <h4>Why don't you add one?</h4>
              </span>
            </NavLink>
          </div>
        )}
        <h4>Address</h4>
        <p>{campus.address}</p>
        <h4>Description</h4>
        <p>{campus.description}</p>
        <Image src={campus.imageUrl} width={500} height={250} />
        <NavLink to={`/campuses/${campusId}/edit`} activeClassName="active">
          <span>
            <h3>Edit this campus</h3>
          </span>
        </NavLink>
        <NavLink
          to="/campuses"
          onClick={() => this.deleteCampus(campusId)}
          activeClassName="active"
        >
          <span>
            <h3>Delete this campus</h3>
          </span>
        </NavLink>
        <h4>This will also delete all of its students!</h4>
      </div>
    )
  }
}

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
