import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import ProductVersionList from '../components/ProductVersionList'

function ProductVersionListWithParams(props) {
  const history = useHistory()
  const { productId } = useParams()

  const mapStateToProps = (state) => {
    if (state.products.length === 0) {
      history.push('/')
      
      return {
        productId: '',
        productVersions: [],
      }
    }

    const product = state.products.filter(
      (product) => product.id === productId
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
