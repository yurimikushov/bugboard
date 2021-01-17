import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions'
import ProductList from '../components/ProductList'

const ProductListContainer = ({
  fetchProducts,
  products,
  isFetching,
  error,
}) => {
  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line
  }, [])

  products = products.map((product) => {
    product.href = `/products/${product.id}/versions`
    return product
  })

  return (
    <ProductList
      dataListName='products'
      products={products}
      isFetching={isFetching}
      error={error}
    />
  )
}

ProductListContainer.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  products: state.products.data,
  isFetching: state.products.isFetching,
  error: state.products.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer)
