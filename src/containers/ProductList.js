import { connect } from 'react-redux'
import { fetchProducts } from '../actions'
import ProductList from '../components/ProductList'

const mapStateToProps = (state) => ({
  products: state.products,
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
