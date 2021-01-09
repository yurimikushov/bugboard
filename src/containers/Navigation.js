import { connect } from 'react-redux'
import Navigation from '../components/Navigation'

const mapStateToProps = (state) => ({
  products: state.products,
})

export default connect(mapStateToProps)(Navigation)
