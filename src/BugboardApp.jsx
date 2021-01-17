import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from './components/Header'
import Navigation from './containers/Navigation'
import Content from './containers/Content'

const BugboardApp = ({ appTitle }) => {
  useEffect(() => (document.title = appTitle), [appTitle])

  return (
    <div style={{ maxWidth: '950px', margin: '0 auto' }}>
      <div className='container vh-100 shadow-lg bg-white'>
        <Header />
        <Navigation />
        <Content />
      </div>
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
