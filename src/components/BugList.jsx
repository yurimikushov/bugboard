import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import Bug from './Bug'
import Alert from './Alert'

function BugList({ bugs, loadBugs }) {
  const { productId, versionId } = useParams()

  // eslint-disable-next-line
  useEffect(() => loadBugs(productId, versionId), [])

  return (
    <div className='versions'>
      <h2>Fixed bugs</h2>
      <ul className='list-group list-group-flush'>
        {bugs.map((bug) => (
          <Bug key={bug.id} id={bug.id} description={bug.description} />
        ))}
        {bugs.length === 0 && <Alert title='No info'/>}
      </ul>
    </div>
  )
}

BugList.propTypes = {
  bugs: PropTypes.array,
  loadBugs: PropTypes.func,
}

export default BugList
