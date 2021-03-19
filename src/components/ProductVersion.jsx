import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProductVersion = ({ title, href }) => (
  <li className='product-version-item list-group-item'>
    <Link className='nav-link p-0' to={href}>
      {title}
    </Link>
  </li>
)

ProductVersion.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default ProductVersion
