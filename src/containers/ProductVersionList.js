import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProductVersions } from '../actions'
import ProductVersionList from '../components/ProductVersionList'

function ProductVersionListWithParams(props) {
  const { productId } = useParams()

  const mapStateToProps = (state) => {
    return {
      productId,
      productVersions: state.productVersions,
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    fetchProductVersions: () => {
      dispatch(fetchProductVersions(productId))
    },
  })

  const ProductVersionListWithParams = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductVersionList)

  return <ProductVersionListWithParams {...props} />
}

export default ProductVersionListWithParams
