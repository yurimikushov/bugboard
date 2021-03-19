import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Navigation from './Navigation'

const withNavigation = (WrappedComponent) => {
  const WithNavigation = ({ appTitle, ...props }) => (
    <>
      <Navigation />
      <main className='content container'>
        <h2 className='content__title'>{appTitle}</h2>
        <WrappedComponent {...props} />
      </main>
    </>
  )

  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  WithNavigation.displayName = `WithNavigation(${wrappedComponentName})`

  WithNavigation.propTypes = {
    appTitle: PropTypes.string.isRequired,
  }

  const mapStateToProps = (state) => ({
    appTitle: state.appTitle,
  })

  return connect(mapStateToProps)(WithNavigation)
}

export default withNavigation
