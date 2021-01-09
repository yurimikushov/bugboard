import { connect } from 'react-redux'
import { loadProducts } from '../actions/products'
import BugboardApp from '../BugboardApp'

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
})

export default connect(null, mapDispatchToProps)(BugboardApp)
