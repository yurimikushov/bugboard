import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function ProductVersion({ productId, versionId, title }) {
  return (
    <li className='list-group-item'>
      <Link
        className='nav-link p-0'
        to={`/products/${productId}/versions/${versionId}/bugs`}
      >
        {title}
      </Link>
    </li>
  )
}

ProductVersion.propTypes = {
  productId: PropTypes.string.isRequired,
  versionId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ProductVersion
