import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Alert from './Alert'

function ProductList({ fetchProducts, isFetching, error, products }) {
  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line
  }, [])

  const needToShowLoader = isFetching
  const needToShowProducts = !isFetching && !error && products.length > 0
  const needToShowNoInfoAlert = !isFetching && !error && products.length === 0
  const needToShowErrorAlert = !!error

  return (
    <div className='products'>
      <h2>Products</h2>
      {needToShowLoader && <Alert title='Loading...' />}
      {needToShowProducts && (
        <ul className='list-group list-group-flush'>
          {products.map((product) => (
            <Product key={product.id} id={product.id} title={product.title} />
          ))}
        </ul>
      )}
      {needToShowNoInfoAlert && <Alert title='No info' />}
      {needToShowErrorAlert && <Alert title={error} />}
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
