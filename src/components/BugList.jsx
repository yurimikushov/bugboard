import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Bug from './Bug'
import Spinner from './Spinner'
import InfoAlert from './InfoAlert'
import ErrorAlert from './ErrorAlert'

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
      {needToShowLoader && <Spinner />}
      {needToShowBugs && (
        <ul className='list-group list-group-flush'>
          {bugs.map((bug) => (
            <Bug key={bug.id} id={bug.id} description={bug.description} />
          ))}
        </ul>
      )}
      {needToShowNoInfoAlert && <InfoAlert text='No info' />}
      {needToShowErrorAlert && <ErrorAlert errorText={error} />}
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
