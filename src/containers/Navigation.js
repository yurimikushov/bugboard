import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Navigation from '../components/Navigation'

const NavigationContainer = ({ breadcrumbs }) => (
  <Navigation breadcrumbs={breadcrumbs} />
)

NavigationContainer.propTypes = {
  breadcrumbs: PropTypes.array,
}

const getProductTitle = (state, productId) => {
  const product = state.products.data.filter(
    (product) => product.id === productId
  )[0]

  return (product && product.title) || 'Product'
}

const getProductVersionTitle = (state, productVersionId) => {
  const productVersion = state.productVersions.data.filter(
    (productVersion) => productVersion.id === productVersionId
  )[0]

  return (productVersion && productVersion.title) || 'Version'
}

const mapStateToProps = (state) => {
  const path = state.router.location.pathname
    .split('/')
    .filter((el) => el.length > 0)

  const productId = path[1]
  const productVersionId = path[3]

  const breadcrumbs = []

  breadcrumbs.push({
    title: 'Home',
    href: '/',
    isActive: !productId && !productVersionId,
  })

  if (productId) {
    breadcrumbs.push({
      title: getProductTitle(state, productId),
      href: `/products/${productId}/versions`,
      isActive: !productVersionId,
    })
  }

  if (productVersionId) {
    breadcrumbs.push({
      title: getProductVersionTitle(state, productVersionId),
      href: `/products/${productId}/versions/${productVersionId}/bugs`,
      isActive: true,
    })
  }

  return {
    breadcrumbs: breadcrumbs,
  }
}

export default connect(mapStateToProps)(NavigationContainer)
