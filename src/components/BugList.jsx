import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Bug from './Bug'
import Alert from './Alert'

function BugList({ bugs, loadBugs }) {
  useEffect(() => {
    loadBugs()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='versions'>
      <h2>Fixed bugs</h2>
      <ul className='list-group list-group-flush'>
        {bugs.map((bug) => (
          <Bug key={bug.id} id={bug.id} description={bug.description} />
        ))}
        {bugs.length === 0 && <Alert title='No info' />}
      </ul>
    </div>
  )
}

BugList.propTypes = {
  bugs: PropTypes.array.isRequired,
  loadBugs: PropTypes.func.isRequired,
}

export default BugList
