import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadProducts } from '../redux/actions'
import Product from './Product'
import Alert from './Alert'

function ProductList({ products, loadProducts }) {
  // eslint-disable-next-line
  useEffect(() => loadProducts(), [])

  return (
    <div className='products'>
      <h2>Products</h2>
      <ul className='list-group list-group-flush'>
        {products.map((product) => (
          <Product key={product.title} id={product.id} title={product.title} />
        ))}
        {products.length === 0 && <Alert title='No info'/>}
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
