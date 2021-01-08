import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function ProductVersion({ productId, versionId, title }) {
  return (
    <li className='list-group-item'>
      <Link
        className='nav-link p-0'
        to={`/products/${productId}/versions/${versionId}`}
      >
        {title}
      </Link>
    </li>
  )
}

ProductVersion.propTypes = {
  productId: PropTypes.string,
  versionId: PropTypes.string,
  title: PropTypes.string,
}

export default ProductVersion
