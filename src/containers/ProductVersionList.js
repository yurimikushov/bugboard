import { connect } from 'react-redux'
import { fetchProductVersions } from '../actions'
import ProductVersionList from '../components/ProductVersionList'

const mapStateToProps = (state) => ({
  isFetching: state.productVersions.isFetching,
  productVersions: state.productVersions.data,
  error: state.productVersions.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchProductVersions: (productId) =>
    dispatch(fetchProductVersions(productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductVersionList)
