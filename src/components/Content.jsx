import React from 'react'
import Navigation from './Navigation'
import ProductList from './ProductList'

function Content() {
  return (
    <main className='container'>
      <Navigation />
      <ProductList />
    </main>
  )
}

export default Content
