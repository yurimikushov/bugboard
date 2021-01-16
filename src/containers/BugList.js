import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBugs } from '../actions'
import BugList from '../components/BugList'

const BugListContainer = ({ fetchBugs, bugs, isFetching, error }) => {
  const { productId, versionId } = useParams()

  useEffect(() => {
    fetchBugs(productId, versionId)
    // eslint-disable-next-line
  }, [])

  return <BugList bugs={bugs} isFetching={isFetching} error={error} />
}

BugListContainer.propTypes = {
  fetchBugs: PropTypes.func.isRequired,
  bugs: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  bugs: state.bugs.data,
  isFetching: state.bugs.isFetching,
  error: state.bugs.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchBugs: (productId, versionId) =>
    dispatch(fetchBugs(productId, versionId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BugListContainer)
