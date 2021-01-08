import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const styles = {
  activeBreadcrumb: {
    color: '#6c757d',
    pointerEvents: 'none',
    cursor: 'default',
    textDecoration: 'none',
  },
}

function useBreadcrumbs() {
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
    breadcrumbs.push({
      title: 'Product',
      href: `/products/${matchVersions.params.productId}/versions`,
      isActive: matchVersions.isExact,
    })
  }

  if (matchBugs) {
    breadcrumbs.push({
      title: 'Bugs',
      href: `/products/${matchBugs.params.productId}/versions/${matchBugs.params.versionId}`,
      isActive: matchBugs.isExact,
    })
  }

  return breadcrumbs
}

function Navigation() {
  const breadcrumbs = useBreadcrumbs()

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

export default Navigation
