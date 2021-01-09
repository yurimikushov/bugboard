import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import ProductVersionList from '../components/ProductVersionList'

function ProductVersionListWithParams(props) {
  const { productId } = useParams()

  const mapStateToProps = (state) => {
    const product = state.productVersions.filter(
      (version) => version.productId === productId
    )[0]

    return {
      productId,
      productVersions: product ? product.versions : [],
    }
  }

  const ProductVersionListWithParams = connect(mapStateToProps)(
    ProductVersionList
  )

  return <ProductVersionListWithParams {...props} />
}

export default ProductVersionListWithParams
