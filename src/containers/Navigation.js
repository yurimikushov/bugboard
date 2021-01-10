import { connect } from 'react-redux'
import Navigation from '../components/Navigation'

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
  }
}

export default connect(mapStateToProps)(Navigation)
