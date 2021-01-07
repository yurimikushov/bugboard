import React from 'react'
import PropTypes from 'prop-types'

function Product({ title }) {
  return (
    <li className='list-group-item' key={title}>
      <a href='/'>{title}</a>
    </li>
  )
}

Product.propTypes = {
  title: PropTypes.string,
}

export default Product
