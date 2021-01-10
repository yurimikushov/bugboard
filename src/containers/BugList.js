import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadBugs } from '../actions'
import BugList from '../components/BugList'

function BugListWithParams(props) {
  const { productId, versionId } = useParams()

  const mapStateToProps = (state) => {
    return {
      bugs: state.bugs,
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    loadBugs: () => {
      dispatch(loadBugs(productId, versionId))
    },
  })

  const BugListWithParams = connect(
    mapStateToProps,
    mapDispatchToProps
  )(BugList)

  return <BugListWithParams {...props} />
}

export default BugListWithParams
