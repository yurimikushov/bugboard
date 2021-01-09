import { connect } from 'react-redux'
import { loadBugs } from '../actions/bugs'
import BugList from '../components/BugList'

const mapStateToProps = (state) => ({
  bugs: state.bugs,
})

const mapDispatchToProps = (dispatch) => ({
  loadBugs: (productId, versionId) => dispatch(loadBugs(productId, versionId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BugList)
