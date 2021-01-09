import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import BugList from '../components/BugList'

function BugListWithParams(props) {
  const { productId, versionId } = useParams()

  const mapStateToProps = (state) => {
    const productVersionBugs = state.bugs.filter(
      (bug) => bug.productId === productId && bug.versionId === versionId
    )[0]

    return {
      bugs: productVersionBugs ? productVersionBugs.bugs : [],
    }
  }

  const BugListWithParams = connect(mapStateToProps)(BugList)

  return <BugListWithParams {...props} />
}

export default BugListWithParams
