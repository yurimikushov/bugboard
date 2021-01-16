import React  from 'react'
import PropTypes from 'prop-types'
import Bug from './Bug'
import Spinner from './Spinner'
import NoInfoAlert from './NoInfoAlert'
import ErrorAlert from './ErrorAlert'

const BugList = ({ bugs, isFetching, error })  => {
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
      {needToShowNoInfoAlert && <NoInfoAlert />}
      {needToShowErrorAlert && <ErrorAlert errorText={error} />}
    </div>
  )
}

BugList.propTypes = {
  bugs: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
}

export default BugList
