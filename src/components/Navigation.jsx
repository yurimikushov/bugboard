import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const styles = {
  activeBreadcrumb: {
    color: '#6c757d',
    pointerEvents: 'none',
    cursor: 'default',
    textDecoration: 'none',
  },
}

function Navigation({ breadcrumbs }) {
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
  breadcrumbs: PropTypes.array,
}

export default Navigation
