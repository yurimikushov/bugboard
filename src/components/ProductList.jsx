import React from 'react'
import Product from './Product'

const products = [
  { title: 'Product #1' },
  { title: 'Product #2' },
  { title: 'Product #3' },
]

function ProductList() {
  return (
    <div className='products'>
      <h2>Products</h2>
      <ul className='list-group list-group-flush'>
        {products.map((product) => (
          <Product key={product.title} title={product.title} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList
