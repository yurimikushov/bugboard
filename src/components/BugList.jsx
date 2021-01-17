import React from 'react'
import PropTypes from 'prop-types'
import withDynamicFetching from './WithDynamicFetching'
import Bug from './Bug'

const BugList = ({ data }) => (
  <ul className='list-group list-group-flush'>
    {data.map((bug) => (
      <Bug key={bug.id} id={bug.id} description={bug.description} />
    ))}
  </ul>
)

BugList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default withDynamicFetching(BugList)

