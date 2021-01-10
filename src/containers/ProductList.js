import { connect } from 'react-redux'
import { fetchProducts } from '../actions'
import ProductList from '../components/ProductList'

const mapStateToProps = (state) => {
  return {
    isFetching: state.products.isFetching,
    products: state.products.data,
    error: state.products.error,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
