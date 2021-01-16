import React from 'react'
import PropTypes from 'prop-types'

const Bug = ({ id, description }) => (
  <li className='list-group-item'>
    <h5>{id}</h5>
    <p>{description}</p>
  </li>
)

Bug.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Bug
