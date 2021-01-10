import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Alert from './Alert'

function ProductList({ fetchProducts, isFetching, error, products }) {
  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='products'>
      <h2>Products</h2>
      {isFetching && <Alert title='Loading...' />}
      {!isFetching && !error && (
        <ul className='list-group list-group-flush'>
          {products.map((product) => (
            <Product key={product.id} id={product.id} title={product.title} />
          ))}
          {products.length === 0 && <Alert title='No info' />}
        </ul>
      )}
      {!isFetching && error && <Alert title={error} />}
    </div>
  )
}

ProductList.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
}

export default ProductList
