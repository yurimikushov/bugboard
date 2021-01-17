import React from 'react'
import PropTypes from 'prop-types'
import withDynamicFetching from './WithDynamicFetching'
import Bug from './Bug'

const BugList = ({ bugs }) => (
  <ul className='list-group list-group-flush'>
    {bugs.map((bug) => (
      <Bug key={bug.id} title={bug.id} description={bug.description} />
    ))}
  </ul>
)

BugList.propTypes = {
  bugs: PropTypes.array.isRequired,
}

export default withDynamicFetching(BugList)

