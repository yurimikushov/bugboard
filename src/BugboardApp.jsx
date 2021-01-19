import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from './containers/Header'
import Navigation from './containers/Navigation'
import Content from './containers/Content'

const BugboardApp = ({ appTitle }) => {
  useEffect(() => (document.title = appTitle), [appTitle])

  return (
    <div className='container'>
      <Header />
      <Navigation />
      <Content />
    </div>
  )
}

BugboardApp.propTypes = {
  appTitle: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  appTitle: state.appTitle,
})

export default connect(mapStateToProps)(BugboardApp)
