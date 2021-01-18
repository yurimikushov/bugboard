import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeAppTitleToProducts, fetchProducts } from '../actions'
import ProductList from '../components/ProductList'

const ProductListContainer = ({
  changeAppTitleToProducts,
  fetchProducts,
  products,
  isFetching,
  error,
}) => {
  /* eslint "react-hooks/exhaustive-deps": "off" */
  useEffect(() => changeAppTitleToProducts(), [])
  useEffect(() => fetchProducts(), [])

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
  changeAppTitleToProducts: PropTypes.func.isRequired,
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
  changeAppTitleToProducts: () => dispatch(changeAppTitleToProducts()),
  fetchProducts: () => dispatch(fetchProducts()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer)
