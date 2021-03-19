import React from 'react'
import PropTypes from 'prop-types'
import withDynamicFetching from './WithDynamicFetching'
import Product from './Product'

const ProductList = ({ products }) => (
  <ul className='product-items list-group list-group-flush'>
    {products.map((product) => (
      <Product key={product.id} title={product.title} href={product.href} />
    ))}
  </ul>
)
ProductList.propTypes = {
  products: PropTypes.array.isRequired,
}

export default withDynamicFetching(ProductList)
