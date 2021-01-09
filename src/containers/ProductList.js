import { connect } from 'react-redux'
import { loadProducts } from '../actions'
import ProductList from '../components/ProductList'

const mapStateToProps = (state) => ({
  products: state.products,
})

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
