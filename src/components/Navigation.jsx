import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav aria-label='breadcrumb'>
      <ol className='breadcrumb mt-2 mb-2'>
        <li className='breadcrumb-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='breadcrumb-item'>
          <Link to='/versions'>Product name</Link>
        </li>
        <li className='breadcrumb-item active' aria-current='page'>
          <Link to='/'>Product version</Link>
        </li>
      </ol>
    </nav>
  )
}

export default Navigation
