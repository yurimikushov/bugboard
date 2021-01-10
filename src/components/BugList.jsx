import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Bug from './Bug'
import Alert from './Alert'

function BugList({ fetchBugs, isFetching, error, bugs }) {
  useEffect(() => {
    fetchBugs()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='bugs'>
      <h2>Fixed bugs</h2>
      {isFetching && <Alert title='Loading...' />}
      {!isFetching && !error && (
        <ul className='list-group list-group-flush'>
          {bugs.map((bug) => (
            <Bug key={bug.id} id={bug.id} description={bug.description} />
          ))}
          {bugs.length === 0 && <Alert title='No info' />}
        </ul>
      )}
      {!isFetching && error && <Alert title={error} />}
    </div>
  )
}

BugList.propTypes = {
  fetchBugs: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  bugs: PropTypes.array.isRequired,
}

export default BugList
