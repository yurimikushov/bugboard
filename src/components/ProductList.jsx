import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Alert from './Alert'

function ProductList({ loadProducts, products }) {
  useEffect(() => {
    loadProducts()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='products'>
      <h2>Products</h2>
      <ul className='list-group list-group-flush'>
        {products.map((product) => (
          <Product key={product.id} id={product.id} title={product.title} />
        ))}
        {products.length === 0 && <Alert title='No info' />}
      </ul>
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  loadProducts: PropTypes.func.isRequired,
}

export default ProductList
