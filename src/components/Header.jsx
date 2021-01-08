import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='pt-2 pb-2'>
      <Link className='nav-link d-inline text-dark p-0' to='/'>
        <h1 className='d-inline'>Bugboard</h1>
      </Link>
    </header>
  )
}

export default Header
