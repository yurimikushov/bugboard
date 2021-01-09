import { connect } from 'react-redux'
import ProductVersionList from '../components/ProductVersionList'

const mapStateToProps = (state) => ({
  products: state.products,
})

export default connect(mapStateToProps)(ProductVersionList)
