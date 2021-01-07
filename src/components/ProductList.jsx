import React from 'react'
import Product from './Product'

function ProductList() {
  return (
    <>
      <h2>Products</h2>
      <ul className='list-group list-group-flush'>
        <Product title='Product #1' />
        <Product title='Product #2' />
        <Product title='Product #3' />
      </ul>
    </>
  )
}

export default ProductList
