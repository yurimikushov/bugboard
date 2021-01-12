import { connect } from 'react-redux'
import { fetchBugs } from '../actions'
import BugList from '../components/BugList'

const mapStateToProps = (state) => ({
  isFetching: state.bugs.isFetching,
  bugs: state.bugs.data,
  error: state.bugs.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchBugs: (productId, versionId) =>
    dispatch(fetchBugs(productId, versionId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BugList)
