import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({title, href}) => (
  <header className='pt-2 pb-2'>
    <Link className='nav-link d-inline text-dark p-0' to={href}>
      <h1 className='d-inline'>{title}</h1>
    </Link>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default Header
