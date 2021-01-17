import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeAppTitleToVersions, fetchProductVersions } from '../actions'
import ProductVersionList from '../components/ProductVersionList'

const ProductVersionListContainer = ({
  changeAppTitleToVersions,
  fetchProductVersions,
  versions,
  isFetching,
  error,
}) => {
  const { productId } = useParams()

  useEffect(() => {
    changeAppTitleToVersions()
    fetchProductVersions(productId)
    // eslint-disable-next-line
  }, [])

  versions = versions.map((version) => {
    version.href = `/products/${productId}/versions/${version.id}/bugs`
    return version
  })

  return (
    <ProductVersionList
      dataListName='versions'
      versions={versions}
      isFetching={isFetching}
      error={error}
    />
  )
}

ProductVersionListContainer.propTypes = {
  changeAppTitleToVersions: PropTypes.func.isRequired,
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
  changeAppTitleToVersions: () => dispatch(changeAppTitleToVersions()),
  fetchProductVersions: (productId) =>
    dispatch(fetchProductVersions(productId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductVersionListContainer)
