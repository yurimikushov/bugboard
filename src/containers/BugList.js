import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBugs } from '../actions'
import BugList from '../components/BugList'

function BugListWithParams(props) {
  const { productId, versionId } = useParams()

  const mapStateToProps = (state) => {
    return {
      isFetching: state.bugs.isFetching,
      bugs: state.bugs.data,
      error: state.bugs.error,
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    fetchBugs: () => dispatch(fetchBugs(productId, versionId)),
  })

  const BugListWithParams = connect(
    mapStateToProps,
    mapDispatchToProps
  )(BugList)

  return <BugListWithParams {...props} />
}

export default BugListWithParams
