import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProductTitle, getProductVersionTitle } from '../selectors'
import Navigation from '../components/Navigation'

const NavigationContainer = ({ products, versions }) => {
  const { productId, versionId } = useParams()

  const breadcrumbs = []

  breadcrumbs.push({
    title: 'Home',
    href: '/',
    isActive: !productId && !versionId,
  })

  if (productId) {
    breadcrumbs.push({
      title: getProductTitle(products, productId) || 'Versions',
      href: `/products/${productId}/versions`,
      isActive: !versionId,
    })
  }

  if (versionId) {
    breadcrumbs.push({
      title: getProductVersionTitle(versions, versionId) || 'Bugs',
      href: `/products/${productId}/versions/${versionId}/bugs`,
      isActive: true,
    })
  }

  return <Navigation breadcrumbs={breadcrumbs} />
}

NavigationContainer.propTypes = {
  products: PropTypes.array.isRequired,
  versions: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  products: state.products.data,
  versions: state.productVersions.data,
})

export default connect(mapStateToProps)(NavigationContainer)
