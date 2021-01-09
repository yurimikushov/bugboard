import React from 'react'
import PropTypes from 'prop-types'
import { Link, useRouteMatch } from 'react-router-dom'

const styles = {
  activeBreadcrumb: {
    color: '#6c757d',
    pointerEvents: 'none',
    cursor: 'default',
    textDecoration: 'none',
  },
}

function useBreadcrumbs(products) {
  const matchVersions = useRouteMatch('/products/:productId/versions')
  const matchBugs = useRouteMatch('/products/:productId/versions/:versionId')

  const breadcrumbs = [
    {
      title: 'Home',
      href: '/',
      isActive: !matchVersions && !matchBugs,
    },
  ]

  if (matchVersions || matchBugs) {
    const productId = matchVersions.params.productId
    const product = products.find((product) => product.id === productId)
    const productTitle = (product && product.title) || 'Product'

    breadcrumbs.push({
      title: productTitle,
      href: `/products/${productId}/versions`,
      isActive: matchVersions.isExact,
    })
  }

  if (matchBugs) {
    const productId = matchVersions.params.productId
    const versionId = matchVersions.params.versionId

    breadcrumbs.push({
      title: 'Bugs',
      href: `/products/${productId}/versions/${versionId}`,
      isActive: matchBugs.isExact,
    })
  }

  return breadcrumbs
}

function Navigation({ products }) {
  const breadcrumbs = useBreadcrumbs(products)

  return (
    <nav aria-label='breadcrumb'>
      <ol className='breadcrumb mt-2 mb-2'>
        {breadcrumbs.map((breadcrumb) => {
          return (
            <li className='breadcrumb-item' key={breadcrumb.title}>
              <Link
                to={breadcrumb.href}
                style={breadcrumb.isActive ? styles.activeBreadcrumb : null}
              >
                {breadcrumb.title}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

Navigation.propTypes = {
  products: PropTypes.array,
}

export default Navigation
