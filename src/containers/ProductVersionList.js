import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProductVersions } from '../actions'
import ProductVersionList from '../components/ProductVersionList'

const ProductVersionListContainer = ({
  fetchProductVersions,
  versions,
  isFetching,
  error,
}) => {
  const { productId } = useParams()

  useEffect(() => {
    fetchProductVersions(productId)
    // eslint-disable-next-line
  }, [])

  return (
    <ProductVersionList
      productId={productId}
      data={versions}
      isFetching={isFetching}
      error={error}
    />
  )
}

ProductVersionListContainer.propTypes = {
  fetchProductVersions: PropTypes.func.isRequired,
  versions: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  versions: state.productVersions.data,
  isFetching: state.productVersions.isFetching,
  error: state.productVersions.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchProductVersions: (productId) =>
    dispatch(fetchProductVersions(productId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductVersionListContainer)
