import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function ProductVersion({ title }) {
  return (
    <li className='list-group-item'>
      <Link className='nav-link p-0' to='/'>
        {title}
      </Link>
    </li>
  )
}

ProductVersion.propTypes = {
  title: PropTypes.string,
}

export default ProductVersion
