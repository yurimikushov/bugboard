import React from 'react'

function Navigation() {
  return (
    <nav aria-label='breadcrumb'>
      <ol className='breadcrumb mt-2 mb-2'>
        <li className='breadcrumb-item'>
          <a href='/'>Home</a>
        </li>
        <li className='breadcrumb-item'>
          <a href='/'>Product name</a>
        </li>
        <li className='breadcrumb-item active' aria-current='page'>
          Product version
        </li>
      </ol>
    </nav>
  )
}

export default Navigation
