import React from 'react'
import PropTypes from 'prop-types'

function ErrorAlert({ errorText }) {
  return <p className='alert alert-danger'>{errorText}</p>
}

ErrorAlert.propTypes = {
  errorText: PropTypes.string.isRequired,
}

export default ErrorAlert
