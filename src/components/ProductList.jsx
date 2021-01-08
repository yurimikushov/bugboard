import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadProducts } from '../redux/actions'
import Product from './Product'

function ProductList({ products, loadProducts }) {
  useEffect(() => loadProducts())

  return (
    <div className='products'>
      <h2>Products</h2>
      <ul className='list-group list-group-flush'>
        {products.map((product) => (
          <Product key={product.title} id={product.id} title={product.title} />
        ))}
      </ul>
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array,
  loadProducts: PropTypes.func,
}

const mapStateToProps = (state) => ({
  products: state.products,
})

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
