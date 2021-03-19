import React from 'react'
import PropTypes from 'prop-types'

const Bug = ({ title, description }) => (
  <li className='bug-item list-group-item'>
    <h5>{title}</h5>
    <p>{description}</p>
  </li>
)

Bug.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Bug
