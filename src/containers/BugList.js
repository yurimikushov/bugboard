import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import BugList from '../components/BugList'

function BugListWithParams(props) {
  const history = useHistory()
  const { productId, versionId } = useParams()

  const mapStateToProps = (state) => {
    if (state.products.length === 0) {
      history.push('/')
      return {
        bugs: [],
      }
    }

    const bugs = state.bugs.filter(
      (bug) => bug.productId === productId && bug.versionId === versionId
    )[0]

    return {
      bugs: bugs ? bugs.bugs : [],
    }
  }

  const BugListWithParams = connect(mapStateToProps)(BugList)

  return <BugListWithParams {...props} />
}

export default BugListWithParams
