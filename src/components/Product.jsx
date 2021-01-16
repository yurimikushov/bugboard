import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Product = ({ id, title }) => (
  <li className='list-group-item' key={title}>
    <Link className='nav-link p-0' to={`/products/${id}/versions`}>
      {title}
    </Link>
  </li>
)

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Product
