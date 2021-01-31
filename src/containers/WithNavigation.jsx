import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Navigation from './Navigation'

const withNavigation = (WrappedComponent) => {
  const WithNavigation = (props) => {
    const wrappedComponentProps = { ...props }
    delete wrappedComponentProps.appTitle

    return (
      <>
        <Navigation />
        <main className='container'>
          <h2>{props.appTitle}</h2>
          <WrappedComponent {...wrappedComponentProps} />
        </main>
      </>
    )
  }

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
