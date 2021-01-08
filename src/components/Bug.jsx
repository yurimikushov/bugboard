import React from 'react'
import PropTypes from 'prop-types'

function Bug({ id, description }) {
  return (
    <li className='list-group-item'>
      <h5>{id}</h5>
      <p>{description}</p>
    </li>
  )
}

Bug.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
}

export default Bug
