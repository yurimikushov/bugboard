import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadBugs } from '../redux/actions'
import Bug from './Bug'

function BugList({ bugs, loadBugs }) {
  const { productId, versionId } = useParams()

  useEffect(() => loadBugs(productId, versionId), [])

  return (
    <div className='versions'>
      <h2>Fixed bugs</h2>
      <ul className='list-group list-group-flush'>
        <hr />
        {bugs.map((bug) => (
          <Bug key={bug.id} id={bug.id} description={bug.description} />
        ))}
      </ul>
    </div>
  )
}

BugList.propTypes = {
  bugs: PropTypes.array,
  loadBugs: PropTypes.func,
}

const mapStateToProps = (state) => ({
  bugs: state.bugs,
})

const mapDispatchToProps = (dispatch) => ({
  loadBugs: (productId, versionId) => dispatch(loadBugs(productId, versionId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BugList)
