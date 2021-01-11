import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Bug from './Bug'
import Alert from './Alert'

function BugList({ fetchBugs, isFetching, error, bugs }) {
  useEffect(() => {
    fetchBugs()
    // eslint-disable-next-line
  }, [])

  const needToShowLoader = isFetching
  const needToShowBugs = !isFetching && !error && bugs.length > 0
  const needToShowNoInfoAlert = !isFetching && !error && bugs.length === 0
  const needToShowErrorAlert = !!error

  return (
    <div className='bugs'>
      <h2>Fixed bugs</h2>
      {needToShowLoader && <Alert title='Loading...' />}
      {needToShowBugs && (
        <ul className='list-group list-group-flush'>
          {bugs.map((bug) => (
            <Bug key={bug.id} id={bug.id} description={bug.description} />
          ))}
        </ul>
      )}
      {needToShowNoInfoAlert && <Alert title='No info' />}
      {needToShowErrorAlert && <Alert title={error} />}
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
