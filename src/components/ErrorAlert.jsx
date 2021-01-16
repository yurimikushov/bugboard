import React from 'react'
import PropTypes from 'prop-types'

const ErrorAlert = ({ errorText }) => (
  <p className='alert alert-danger'>{errorText}</p>
)

ErrorAlert.propTypes = {
  errorText: PropTypes.string.isRequired,
}

export default ErrorAlert
