import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Spinner from './Spinner'
import NoInfoAlert from './NoInfoAlert'
import ErrorAlert from './ErrorAlert'

const ProductList = ({ products, isFetching, error }) => {
  const needToShowLoader = isFetching
  const needToShowProducts = !isFetching && !error && products.length > 0
  const needToShowNoInfoAlert = !isFetching && !error && products.length === 0
  const needToShowErrorAlert = !!error

  return (
    <div className='products'>
      <h2>Products</h2>
      {needToShowLoader && <Spinner />}
      {needToShowProducts && (
        <ul className='list-group list-group-flush'>
          {products.map((product) => (
            <Product key={product.id} id={product.id} title={product.title} />
          ))}
        </ul>
      )}
      {needToShowNoInfoAlert && <NoInfoAlert />}
      {needToShowErrorAlert && <ErrorAlert errorText={error} />}
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
}

export default ProductList
