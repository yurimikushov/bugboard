import React from 'react'
import PropTypes from 'prop-types'

const InfoAlert = ({ text }) => (
  <p className='alert alert-light'>{text}</p>
)

InfoAlert.propTypes = {
  text: PropTypes.string,
}

export default InfoAlert
