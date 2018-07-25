import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import PropTypes from '../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types'
import {connect} from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
