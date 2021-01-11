import React from 'react'
import PropTypes from 'prop-types'

function InfoAlert({ text }) {
  return <p className='alert alert-light'>{text}</p>
}

InfoAlert.propTypes = {
  text: PropTypes.string,
}

export default InfoAlert
