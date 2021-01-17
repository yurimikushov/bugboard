import React from 'react'
import PropTypes from 'prop-types'
import withDynamicFetching from './WithDynamicFetching'
import Product from './Product'

const ProductList = ({ data }) => (
  <ul className='list-group list-group-flush'>
    {data.map((product) => (
      <Product key={product.id} title={product.title} href={product.href} />
    ))}
  </ul>
)
ProductList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default withDynamicFetching(ProductList)
