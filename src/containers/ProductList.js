import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

const mapStateToProps = (state) => ({
  products: state.products,
})

export default connect(mapStateToProps)(ProductList)
