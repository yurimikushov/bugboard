import React from 'react'
import PropTypes from 'prop-types'

function Alert({title}) {
  return (
    <p className='alert alert-light'>{title}</p>
  )
}

Alert.propTypes = {
  title: PropTypes.string,
}

export default Alert
