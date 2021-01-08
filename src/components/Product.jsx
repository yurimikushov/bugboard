import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Product({ title }) {
  return (
    <li className='list-group-item' key={title}>
      <Link className='nav-link p-0' to='/versions'>
        {title}
      </Link>
    </li>
  )
}

Product.propTypes = {
  title: PropTypes.string,
}

export default Product
